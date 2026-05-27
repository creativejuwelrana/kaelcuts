import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const TO_EMAIL = "mahadihassan.data@gmail.com";

const Schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  message: z.string().min(1).max(1000),
  plan: z.string().max(100).optional().default(""),
});

function b64url(s: string) {
  return Buffer.from(s, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function buildRaw(from: string, replyTo: string, subject: string, body: string) {
  const lines = [
    `To: ${from}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "MIME-Version: 1.0",
    "",
    body,
  ];
  return b64url(lines.join("\r\n"));
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY;
        if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
          return new Response(JSON.stringify({ error: "Email not configured" }), { status: 500 });
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
        }
        const parsed = Schema.safeParse(payload);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: "Validation failed" }), { status: 400 });
        }
        const { name, email, message, plan } = parsed.data;

        const subject = `New KaelCuts Order from ${name}${plan ? ` — ${plan}` : ""}`;
        const body = `Name: ${name}\nEmail: ${email}\nPlan: ${plan || "Custom"}\n\nMessage:\n${message}`;
        const raw = buildRaw(TO_EMAIL, email, subject, body);

        const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
          },
          body: JSON.stringify({ raw }),
        });

        if (!res.ok) {
          const text = await res.text();
          return new Response(JSON.stringify({ error: `Gmail send failed [${res.status}]: ${text}` }), { status: 502 });
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});