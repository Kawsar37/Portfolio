import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const clientIp = getClientIp(req);

    // Rate Limit: Max 5 newsletter subscriptions per 10 minutes per IP
    const limitResult = rateLimit(`newsletter:${clientIp}`, 5, 10 * 60 * 1000);
    if (!limitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many requests. Please try again in ${Math.ceil(
            limitResult.resetInSeconds / 60
          )} minutes.`,
        },
        { status: 429 }
      );
    }

    const { email } = await req.json();

    if (
      !email ||
      typeof email !== "string" ||
      email.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (error) {
      const msg = error.message?.toLowerCase() || "";
      if (
        msg.includes("already") ||
        msg.includes("exist") ||
        msg.includes("duplicate")
      ) {
        return NextResponse.json(
          { success: false, error: "Already subscribed" },
          { status: 409 }
        );
      }
      throw error;
    }

    console.log("[Newsletter] New subscriber:", email, data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("[Newsletter] Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
