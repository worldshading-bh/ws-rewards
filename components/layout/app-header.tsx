"use client";

import Image from "next/image";
import { Bell, MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

type AppHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function AppHeader({ eyebrow: _eyebrow, title, subtitle }: AppHeaderProps) {
  const { setTheme, theme } = useTheme();
  const mounted = useMounted();

  return (
    <header className="flex items-start justify-between gap-4">
      <div className="space-y-3">
        <div className="flex items-center">
          <Image src="/icons/ws-logo.svg" alt="World Shading" width={68} height={36} priority className="h-9 w-auto" />
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 text-balance dark:text-white">{title}</h1>
          <p className="max-w-sm text-sm leading-6 text-gray-500 dark:text-zinc-400">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="glass-surface inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200/80 text-gray-700 shadow-soft dark:border-white/10 dark:text-white"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="glass-surface inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200/80 text-gray-700 shadow-soft dark:border-white/10 dark:text-white"
        >
          {mounted && theme === "dark" ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
