import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, reason, existing, message } = body as Record<
    string,
    string
  >;

  if (!name || !email || !reason || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Allow build/dev without crashing — log and accept the submission.
    console.warn("[contact] RESEND_API_KEY not configured; logging submission only.");
    console.log({ name, email, phone, reason, existing, message });
    return NextResponse.json({ ok: true, queued: true });
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@aviishaaya.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Avi Ishaaya Centers <noreply@aviishaaya.com>";

  const resend = new Resend(apiKey);

  const html = `
    <h2 style="font-family:Georgia,serif;color:#0d2436">New contact form submission</h2>
    <table style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#1f2d3a;border-collapse:collapse;">
      <tr><td style="padding:6px 12px;color:#6b7c8a">Name</td><td style="padding:6px 12px">${escape(name)}</td></tr>
      <tr><td style="padding:6px 12px;color:#6b7c8a">Email</td><td style="padding:6px 12px">${escape(email)}</td></tr>
      <tr><td style="padding:6px 12px;color:#6b7c8a">Phone</td><td style="padding:6px 12px">${escape(phone || "")}</td></tr>
      <tr><td style="padding:6px 12px;color:#6b7c8a">Reason</td><td style="padding:6px 12px">${escape(reason)}</td></tr>
      <tr><td style="padding:6px 12px;color:#6b7c8a">Existing patient</td><td style="padding:6px 12px">${escape(existing || "")}</td></tr>
    </table>
    <h3 style="font-family:Georgia,serif;color:#0d2436;margin-top:24px">Message</h3>
    <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#1f2d3a;white-space:pre-wrap">${escape(message)}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New ${reason} from ${name}`,
      replyTo: email,
      html,
    });
    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
