"use client";

import { useCallback, useEffect, useState } from "react";

type DeferredPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function useInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<DeferredPrompt | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(display-mode: standalone)");
    const onInstall = () => setIsInstalled(true);
    const handlePrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as DeferredPrompt);
    };

    setIsInstalled(media.matches || (window.navigator as Navigator & { standalone?: boolean }).standalone === true);

    window.addEventListener("beforeinstallprompt", handlePrompt);
    window.addEventListener("appinstalled", onInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
      window.removeEventListener("appinstalled", onInstall);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!promptEvent) {
      return;
    }

    await promptEvent.prompt();
    await promptEvent.userChoice;
    setPromptEvent(null);
  }, [promptEvent]);

  return {
    promptInstall,
    isInstalled,
    isSupported: typeof window !== "undefined",
    canInstall: Boolean(promptEvent)
  };
}
