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
      const r = await fetch("/api/contact", {
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
      <div className="rounded-2xl border border-[var(--teal)]/30 bg-white p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-[var(--teal)]/15 grid place-items-center text-[var(--teal-deep)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl text-[var(--navy)]">Thank you!</h3>
        <p className="mt-2 text-[var(--navy-soft)]/80">
          Your message has been sent. Our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  const inputCls =
    "mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--navy)] placeholder:text-[var(--muted)] focus:border-[var(--teal)] focus:outline-none focus:ring-2 focus:ring-[var(--teal)]/20 transition";
  const labelCls = "block text-xs uppercase tracking-[0.18em] text-[var(--navy-soft)]";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>Name</span>
          <input name="name" required className={inputCls} placeholder="Jane Doe" />
        </label>
        <label className="block">
          <span className={labelCls}>Email</span>
          <input
            type="email"
            name="email"
            required
            className={inputCls}
            placeholder="jane@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className={labelCls}>Phone Number</span>
        <input name="phone" className={inputCls} placeholder="(323) 555-0100" />
      </label>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>Why are you reaching out?</span>
          <select name="reason" required className={inputCls + " appearance-none"}>
            <option value="">Select…</option>
            <option>Request Appointment</option>
            <option>Request Refill</option>
            <option>Billing Question</option>
            <option>General Question</option>
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Are you an existing patient?</span>
          <select name="existing" required className={inputCls + " appearance-none"}>
            <option value="">Select…</option>
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
          placeholder="How can we help?"
        />
      </label>
      {status === "error" && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--teal-deep)] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit"}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
