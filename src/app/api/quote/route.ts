import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface QuotePayload {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  category: string;
  subProduct: string;
  details: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<QuotePayload>;

    const { companyName, contactPerson, email, phone, country, category, subProduct, details } = body;

    if (!companyName || !contactPerson || !email || !phone || !country || !category) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const toAddress = process.env.QUOTE_TO_EMAIL;
    const fromAddress = process.env.RESEND_FROM_EMAIL;

    if (!toAddress || !fromAddress) {
      console.error("QUOTE_TO_EMAIL or RESEND_FROM_EMAIL is not set.");
      return NextResponse.json({ error: "Server email configuration is incomplete." }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: `FLUXFOR Quote Requests <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Quote Request — ${companyName}`,
      html: `
        <h2 style="font-family: sans-serif;">New Quote Request</h2>
        <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse;">
          <tr><td style="padding:6px 12px; font-weight:600;">Company</td><td style="padding:6px 12px;">${escapeHtml(companyName)}</td></tr>
          <tr><td style="padding:6px 12px; font-weight:600;">Contact Person</td><td style="padding:6px 12px;">${escapeHtml(contactPerson)}</td></tr>
          <tr><td style="padding:6px 12px; font-weight:600;">Email</td><td style="padding:6px 12px;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 12px; font-weight:600;">Phone / WhatsApp</td><td style="padding:6px 12px;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:6px 12px; font-weight:600;">Country</td><td style="padding:6px 12px;">${escapeHtml(country)}</td></tr>
          <tr><td style="padding:6px 12px; font-weight:600;">Category</td><td style="padding:6px 12px;">${escapeHtml(category)}</td></tr>
          <tr><td style="padding:6px 12px; font-weight:600;">Sub-Product</td><td style="padding:6px 12px;">${escapeHtml(subProduct || "—")}</td></tr>
          <tr><td style="padding:6px 12px; font-weight:600; vertical-align:top;">Details</td><td style="padding:6px 12px; white-space:pre-wrap;">${escapeHtml(details || "—")}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message || "Failed to send email." }, { status: 500 });
    }

    console.log("Quote email sent, id:", data?.id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote email failed:", err);
    return NextResponse.json({ error: "Failed to send quote request." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}