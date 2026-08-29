"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const r = await fetch("/api/contact/", {
        // Trailing slash matches `trailingSlash: true`; without it the POST
        // takes a 308 hop before reaching the handler.
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        throw new Error(j.error || "Submission failed");
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--blue)]/30 bg-white p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-[var(--blue)]/15 grid place-items-center text-[var(--blue)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-kalice text-2xl text-[var(--ink)]">Thank you!</h3>
        <p className="mt-2 text-[var(--ink)]/80">
          Your message has been sent. Our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  const inputCls =
    "mt-2 w-full rounded-xl border border-[var(--hairline)] bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink-60)] focus:border-[var(--blue)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)]/20 transition";
  const labelCls = "block text-xs uppercase tracking-[0.18em] text-[var(--ink)]";
  const checkboxCls =
    "mt-0.5 size-4 shrink-0 rounded border-[var(--hairline)] text-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[var(--hairline)] bg-white p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>Full Name</span>
          <input name="name" required className={inputCls} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className={labelCls}>Email address</span>
          <input
            type="email"
            name="email"
            required
            className={inputCls}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className={labelCls}>Phone number</span>
        <input name="phone" className={inputCls} placeholder="(555) 123-4567" />
      </label>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>Why are you reaching out?</span>
          <select name="reason" required className={inputCls + " appearance-none"}>
            <option value="">Select an option</option>
            <option>Request Appointment</option>
            <option>Request Refill</option>
            <option>Billing Question</option>
            <option>General Question</option>
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Are you an existing patient of Dr. Ishaaya?</span>
          <select name="existing" required className={inputCls + " appearance-none"}>
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className={labelCls}>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={inputCls + " resize-y"}
          placeholder="Please share anything you’d like us to know"
        />
      </label>
      {/* Both consent lines come straight from 2256:9208, which carries them
          between the message box and Submit. The form had neither, so the
          marketing opt-in and the express written consent for calls and texts
          were being collected nowhere — the second is the one that has to be
          on the page for the practice to text a patient at all. Opt-in, so
          neither is `required` and neither is checked by default. */}
      <div className="flex flex-col gap-3 pt-1">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="newsletter"
            value="yes"
            className={checkboxCls}
          />
          <span className="text-sm leading-5 text-[var(--ink-80)]">
            Yes, I&apos;d like to stay connected with Avi Ishaaya and be the
            first to hear about upcoming events, and blogs.
          </span>
        </label>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="smsConsent"
            value="yes"
            className={checkboxCls}
          />
          <span className="text-sm leading-5 text-[var(--ink-80)]">
            I also give express written consent to receive text messages and
            phone calls from Avi Ishaaya. Message and data rates may apply. I
            understand I can opt out at any time by replying STOP.
          </span>
        </label>
      </div>
      {status === "error" && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--blue)] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit"}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
