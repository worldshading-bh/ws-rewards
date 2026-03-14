"use client";

import { Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useInstallPrompt } from "@/hooks/use-install-prompt";

export function InstallPrompt() {
  const { isSupported, isInstalled, promptInstall, canInstall } = useInstallPrompt();

  if (!isSupported || isInstalled || !canInstall) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={promptInstall}
        className="fixed bottom-28 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-brand-foreground shadow-luxury"
      >
        <Download className="h-4 w-4" />
        Install app
      </motion.button>
    </AnimatePresence>
  );
}
