"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error" | "invalid";

export function ContactForm({ t, locale }: { t: Dictionary["contact"]["form"]; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    if (!value("name") || !value("email") || !value("message") || !data.get("privacy")) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: value("name"),
          company: value("company"),
          email: value("email"),
          phone: value("phone"),
          projectType: value("projectType"),
          message: value("message"),
          website: value("website"),
          locale,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "sending" ? t.sending : status === "sent" ? t.sent : status === "error" ? t.error : status === "invalid" ? t.required : "";
  const isProblem = status === "error" || status === "invalid";

  return (
    <form className="form reveal" noValidate onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="f-name">{t.name}</label>
        <input id="f-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="f-company">{t.company}</label>
        <input id="f-company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="f-email">{t.email}</label>
        <input id="f-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="f-phone">{t.phone}</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field full">
        <label htmlFor="f-type">{t.projectType}</label>
        <select id="f-type" name="projectType" defaultValue={t.projectTypes[0]}>
          {t.projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="f-msg">{t.message}</label>
        <textarea id="f-msg" name="message" placeholder={t.messagePlaceholder} required />
      </div>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="check">
        <input type="checkbox" name="privacy" required />
        <span>{t.privacy}</span>
      </label>
      <div className="form-foot">
        <button className="btn" type="submit" disabled={status === "sending"}>
          <span>{t.submit}</span>
          <ArrowIcon />
        </button>
        <span className={`form-msg${isProblem ? " is-error" : ""}`} role="status" aria-live="polite">
          {message}
        </span>
      </div>
    </form>
  );
}
