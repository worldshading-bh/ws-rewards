"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CreditCard, Gauge, Gem, ReceiptText, UserRound } from "lucide-react";
import { cn } from "@/utils/cn";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/membership", label: "Membership", icon: Gem },
  { href: "/points", label: "Sales", icon: ReceiptText },
  { href: "/card", label: "Card", icon: CreditCard },
  { href: "/profile", label: "Profile", icon: UserRound }
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="safe-px pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto flex w-full max-w-md justify-center pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <div className="pointer-events-auto relative flex h-[78px] w-full items-center justify-between rounded-[2.15rem] border border-gray-200/90 bg-white/88 px-2 py-2 shadow-[0_16px_40px_rgba(17,24,39,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(21,22,26,0.88),rgba(11,11,13,0.96))] dark:shadow-[0_24px_60px_rgba(0,0,0,0.46)]">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/75 to-transparent" />
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex h-full flex-1 flex-col items-center justify-center gap-1 rounded-[1.35rem] px-2 text-[11px] font-medium transition",
                isActive ? "text-white" : "text-gray-500 dark:text-white/42"
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(236,86,56,0.94),rgba(182,68,42,1))] shadow-[0_12px_30px_rgba(236,86,56,0.28)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              ) : null}
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.94 }} animate={isActive ? { y: [0, -1.5, 0] } : undefined} transition={{ duration: 0.35 }}>
                <Icon className={cn("relative h-[18px] w-[18px]", isActive ? "text-gold" : "text-gray-600 dark:text-white/55")} />
              </motion.div>
              <span className="relative tracking-[0.01em]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
