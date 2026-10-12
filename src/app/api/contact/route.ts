// Sends contact-form requests by email through Resend (https://resend.com).
// Needs RESEND_API_KEY and CONTACT_TO in the Vercel project settings; CONTACT_FROM must use a domain verified on Resend.
// Without them the endpoint answers 503 and the form asks the visitor to write by email instead.

type ContactRequest = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
  website?: unknown;
  locale?: unknown;
};

const limits = { name: 120, company: 160, email: 200, phone: 40, projectType: 80, message: 5000, locale: 5 };

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: ContactRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Bots fill the hidden "website" field; pretend success so they move on.
  if (text(body.website, 200)) return Response.json({ ok: true });

  const name = text(body.name, limits.name);
  const email = text(body.email, limits.email);
  const message = text(body.message, limits.message);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!apiKey || !to) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const lines = [
    `Nome: ${name}`,
    `Azienda: ${text(body.company, limits.company) || "—"}`,
    `Email: ${email}`,
    `Telefono: ${text(body.phone, limits.phone) || "—"}`,
    `Tipo di progetto: ${text(body.projectType, limits.projectType) || "—"}`,
    `Lingua del sito: ${text(body.locale, limits.locale) || "—"}`,
    "",
    message,
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Opera Trade <sito@operatrade.it>",
      to: to.split(",").map((address) => address.trim()),
      reply_to: email,
      subject: `Richiesta dal sito — ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
