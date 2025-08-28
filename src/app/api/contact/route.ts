
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const token = body.token;
  const verifyResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );

  const data = await verifyResponse.json();

  if (!data.success || data.score < 0.5) {
    return NextResponse.json({ message: "reCAPTCHA failed" }, { status: 400 });
  }

  return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
}
