import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, reason, existing, message, newsletter, smsConsent } =
    body as Record<string, string>;

  // An unchecked box is absent from FormData, so these arrive undefined rather
  // than "no". Recorded either way: the SMS line is the practice's express
  // written consent to call or text this patient, and it is only worth
  // collecting if it reaches the inbox with the enquiry.
  const consent = (v: string | undefined) => (v ? "Yes" : "No");

  if (!name || !email || !reason || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // In development, log the submission and accept it so the form can be
    // exercised without credentials.
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contact] RESEND_API_KEY not set; logging submission only.");
      console.log({ name, email, phone, reason, existing, message, newsletter, smsConsent });
      return NextResponse.json({ ok: true, queued: true });
    }
    // In production, never report success we cannot deliver on: answering
    // "ok" here would show the patient a confirmation while the enquiry went
    // nowhere. Fail loudly so the misconfiguration surfaces instead.
    console.error("[contact] RESEND_API_KEY missing in production; rejecting.");
    return NextResponse.json(
      { error: "The form is temporarily unavailable. Please call (323) 954-1788." },
      { status: 503 },
    );
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
      <tr><td style="padding:6px 12px;color:#6b7c8a">Newsletter opt-in</td><td style="padding:6px 12px">${consent(newsletter)}</td></tr>
      <tr><td style="padding:6px 12px;color:#6b7c8a">Consent to calls/texts</td><td style="padding:6px 12px">${consent(smsConsent)}</td></tr>
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
