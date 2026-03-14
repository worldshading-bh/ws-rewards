"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const MOCK_OTP = "123456";

export function LoginScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const isValid = useMemo(() => phoneNumber.trim().length >= 8 && otp.length === 6, [otp.length, phoneNumber]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (otp !== MOCK_OTP) {
      setError("Use the demo OTP 123456 to enter the app.");
      return;
    }

    localStorage.setItem(
      "ws-rewards-session",
      JSON.stringify({
        phoneNumber,
        loggedInAt: new Date().toISOString()
      })
    );

    router.push("/dashboard");
  };

  return (
    <main className="page-shell safe-px safe-pb justify-center py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-16 h-36 w-36 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <GlassCard className="overflow-hidden p-6 shadow-luxury">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-card shadow-soft">
              <Image src="/icons/logo-mark.svg" alt="WS Rewards logo" width={34} height={34} priority />
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold">World Shading</p>
            <h1 className="text-3xl font-semibold tracking-tight text-balance">WS Rewards</h1>
            <p className="mt-2 max-w-xs text-sm text-[var(--muted)]">
              A luxury loyalty experience designed for premium customers.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-2">
              <span className="text-sm font-medium">Phone Number</span>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="+973 3600 0000"
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/20"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium">OTP</span>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={otp}
                onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="123456"
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base tracking-[0.4em] outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/20"
              />
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold">
              <ShieldCheck className="h-4 w-4" />
              Demo access uses OTP <span className="font-semibold">123456</span>
            </div>

            {error ? <p className="text-sm text-brand">{error}</p> : null}

            <button
              type="submit"
              disabled={!isValid}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand text-base font-medium text-brand-foreground shadow-soft transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </GlassCard>
      </motion.div>
    </main>
  );
}
