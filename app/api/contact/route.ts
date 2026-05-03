// /app/api/contact/route.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, message } = await req.json();

    const data = await resend.emails.send({
      from: "Kawsar <contact@contact.kawsar.engineer>",
      to: "kawsarali750@gmail.com",
      subject: "New message from kawsar.engineer",
      replyTo: email,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>WhatsApp:</b> ${whatsapp}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
