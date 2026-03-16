"use client";

import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/star-rating";
import { CustomerOverview } from "@/types/customer";

export function MembershipCard({ data }: { data: CustomerOverview }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.012, boxShadow: "0 32px 72px rgba(0,0,0,0.18)" }}
      whileTap={{ scale: 0.992 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative w-full rounded-[2.1rem] border border-gold/25 bg-[linear-gradient(135deg,#fff8f3_0%,#f7ede4_42%,#ffffff_100%)] p-[1px] shadow-[0_24px_48px_rgba(17,24,39,0.12)] dark:border-gold/30 dark:bg-[linear-gradient(135deg,#7a2e1c_0%,#d4572f_42%,#2a1b17_100%)] dark:shadow-[0_28px_60px_rgba(0,0,0,0.38)]"
    >
      <div className="relative min-h-[170px] w-full rounded-[calc(2.1rem-1px)] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(200,167,91,0.16),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.95),rgba(248,250,252,0.9))] p-5 text-gray-900 backdrop-blur-xl dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(200,167,91,0.18),transparent_28%),linear-gradient(160deg,rgba(22,16,14,0.76),rgba(12,11,12,0.9))] dark:text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(120deg,rgba(255,255,255,0.14)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.14)_100%),repeating-linear-gradient(135deg,rgba(31,41,55,0.03)_0_2px,transparent_2px_9px)] dark:[background-image:linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.08)_100%),repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_9px)]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[calc(2.1rem-1px)]">
          <div className="absolute inset-y-0 left-[-28%] w-[42%] rotate-[14deg] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_100%)] opacity-45 animate-[shimmer_7s_linear_infinite] dark:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.18)_45%,transparent_100%)]" />
        </div>
        <div className="pointer-events-none absolute inset-x-5 top-4 h-px bg-gradient-to-r from-transparent via-gold/85 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-gold/12 blur-3xl dark:bg-gold/18" />
        <div className="pointer-events-none absolute -bottom-12 left-0 h-28 w-28 rounded-full bg-brand/12 blur-3xl dark:bg-brand/20" />

        <div className="relative flex h-auto flex-col gap-[14px] p-0">
          <div className="flex flex-nowrap items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-gold">WS Rewards</p>
            </div>
            <div className="flex shrink-0 items-center justify-end">
              <div className="rounded-full border border-gray-200/80 bg-white/60 px-3 py-2 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
                <p className="text-[10px] uppercase tracking-[0.24em] text-gray-500 dark:text-white/55">{data.tier}</p>
                <div className="mt-1 flex justify-end">
                  <StarRating value={data.stars} total={5} size="sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="text-[11px] uppercase tracking-[0.26em] text-gold/90">{data.tier} Member</p>
            <p className="max-w-full truncate whitespace-nowrap text-2xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white">{data.customer}</p>
          </div>

          <div className="my-[6px] h-px bg-gradient-to-r from-transparent via-gray-300/90 to-transparent opacity-25 dark:via-white/70" />

          <div className="grid w-full grid-cols-2 gap-3">
            <div className="flex min-h-[60px] w-full flex-col justify-center rounded-[1.45rem] border border-gray-200/80 bg-white/70 p-3 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05]">
              <p className="truncate text-[10px] uppercase tracking-[0.22em] text-gold/90">Current Discount</p>
              <p className="mt-1.5 truncate text-2xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white">{data.currentDiscount}%</p>
            </div>
            <div className="flex min-h-[60px] w-full flex-col justify-center rounded-[1.45rem] border border-gray-200/80 bg-white/50 p-3 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
              <p className="truncate text-[10px] uppercase tracking-[0.22em] text-gold/90">Member ID</p>
              <p className="mt-1.5 truncate text-sm font-semibold tracking-[0.08em] text-gray-900 dark:text-white">{data.membershipId}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
