"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, LogOut, ShieldCheck, Smartphone } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { StarRating } from "@/components/ui/star-rating";
import { CustomerOverview } from "@/types/customer";

export function ProfileScreen({ data }: { data: CustomerOverview }) {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem("ws-rewards-session");
    router.replace("/");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-4"
    >
      <GlassCard className="rounded-[2rem] p-5">
        <p className="text-sm text-gray-500 dark:text-zinc-400">Member profile</p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{data.customer}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">{data.tier} membership · {data.currentDiscount}% discount</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">Member ID {data.membershipId}</p>
          </div>
          <StarRating value={data.stars} size="lg" />
        </div>
      </GlassCard>

      <GlassCard className="rounded-[1.75rem] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gray-400 dark:text-white/45">Membership status</p>
            <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{data.totalSales} BHD total sales</p>
          </div>
          <p className="rounded-full border border-gold/20 bg-gold/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            {data.tier}
          </p>
        </div>
      </GlassCard>

      {[
        { icon: Smartphone, title: "Install on home screen", detail: "Fast access with native app feel" },
        { icon: ShieldCheck, title: "Secure sign-in", detail: "Your membership access is protected on this device" }
      ].map((item) => (
        <GlassCard key={item.title} className="flex items-center justify-between rounded-[1.75rem] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
              <p className="text-sm text-gray-500 dark:text-zinc-400">{item.detail}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 dark:text-zinc-400" />
        </GlassCard>
      ))}

      <button
        type="button"
        onClick={handleLogout}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[1.5rem] border border-brand/30 bg-brand/10 px-4 py-4 text-sm font-medium text-brand transition hover:bg-brand/15"
      >
        <LogOut className="h-4 w-4" />
        Sign out
      </button>
    </motion.section>
  );
}
