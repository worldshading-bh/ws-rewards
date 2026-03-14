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
      className="relative overflow-hidden rounded-[2.35rem] border border-gold/25 bg-[linear-gradient(135deg,#fff8f3_0%,#f7ede4_42%,#ffffff_100%)] p-[1px] shadow-[0_24px_48px_rgba(17,24,39,0.12)] dark:border-gold/30 dark:bg-[linear-gradient(135deg,#7a2e1c_0%,#d4572f_42%,#2a1b17_100%)] dark:shadow-[0_28px_60px_rgba(0,0,0,0.38)]"
    >
      <div className="relative overflow-hidden rounded-[calc(2.35rem-1px)] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(200,167,91,0.16),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.95),rgba(248,250,252,0.9))] px-6 py-6 text-gray-900 backdrop-blur-xl dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(200,167,91,0.18),transparent_28%),linear-gradient(160deg,rgba(22,16,14,0.76),rgba(12,11,12,0.9))] dark:text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(120deg,rgba(255,255,255,0.14)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.14)_100%),repeating-linear-gradient(135deg,rgba(31,41,55,0.03)_0_2px,transparent_2px_9px)] dark:[background-image:linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.08)_100%),repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_9px)]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_18%,rgba(255,255,255,0.5)_34%,transparent_54%)] opacity-55 animate-[shimmer_7s_linear_infinite] dark:bg-[linear-gradient(110deg,transparent_18%,rgba(255,255,255,0.22)_34%,transparent_54%)]" />
        <div className="absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-gold/85 to-transparent" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/12 blur-3xl dark:bg-gold/18" />
        <div className="absolute -bottom-14 left-0 h-36 w-36 rounded-full bg-brand/12 blur-3xl dark:bg-brand/20" />

        <div className="relative flex flex-col gap-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-gold">WS Rewards</p>
            </div>
            <div className="rounded-full border border-gray-200/80 bg-white/60 px-3 py-2 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
              <p className="text-[10px] uppercase tracking-[0.26em] text-gray-500 dark:text-white/55">{data.tier}</p>
              <div className="mt-1 flex justify-end">
                <StarRating value={data.stars} total={5} size="sm" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[12px] uppercase tracking-[0.28em] text-gold/90">{data.tier} Member</p>
            <p className="text-[2rem] font-semibold tracking-[-0.04em] text-gray-900 dark:text-white">{data.customer}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-gray-200/80 pt-5 dark:border-white/10">
            <div className="rounded-[1.65rem] border border-gray-200/80 bg-white/70 px-4 py-4 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-[11px] uppercase tracking-[0.26em] text-gold/90">Current Discount</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white">{data.currentDiscount}%</p>
            </div>
            <div className="rounded-[1.65rem] border border-gray-200/80 bg-white/50 px-4 py-4 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
              <p className="text-[11px] uppercase tracking-[0.26em] text-gold/90">Member ID</p>
              <p className="mt-3 text-base font-semibold tracking-[0.1em] text-gray-900 dark:text-white">{data.membershipId}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
