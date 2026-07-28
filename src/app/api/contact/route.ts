// /app/api/contact/route.ts

import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { escapeHtml } from "@/lib/security";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const clientIp = getClientIp(req);

    // Rate Limit: Max 5 submissions per 10 minutes per IP address
    const limitResult = rateLimit(clientIp, 5, 10 * 60 * 1000);
    if (!limitResult.success) {
      return Response.json(
        {
          success: false,
          error: `Too many contact requests. Please try again in ${Math.ceil(
            limitResult.resetInSeconds / 60
          )} minutes.`,
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, hp_field } = body;

    // Honeypot trap: Hidden field filled by spam bots
    if (hp_field) {
      console.warn(`[Security Alert] Bot trapped via honeypot from IP: ${clientIp}`);
      // Return fake success to confuse the bot without sending any email
      return Response.json({ success: true, data: { id: "honeypot_trapped" } });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim() || name.length > 100) {
      return Response.json(
        { success: false, error: "Invalid or too long name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== "string" ||
      !emailRegex.test(email) ||
      email.length > 100
    ) {
      return Response.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.length > 3000
    ) {
      return Response.json(
        {
          success: false,
          error: "Message must be between 10 and 3000 characters.",
        },
        { status: 400 }
      );
    }

    // Sanitize user inputs for HTML context
    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanMessage = escapeHtml(message.trim());

    const data = await resend.emails.send({
      from: "Kawsar <contact@contact.kawsar.engineer>",
      to: "kawsarali.cs@gmail.com",
      subject: `New message from ${cleanName} (via kawsar.engineer)`,
      replyTo: email.trim(),
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #111;">New Portfolio Contact Message</h2>
          <p><b>Name:</b> ${cleanName}</p>
          <p><b>Email:</b> ${cleanEmail}</p>
          <p><b>Message:</b></p>
          <blockquote style="background: #f4f4f4; padding: 15px; border-left: 4px solid #0077b5; white-space: pre-wrap;">${cleanMessage}</blockquote>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 12px; color: #888;">Sender IP: ${clientIp}</p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
