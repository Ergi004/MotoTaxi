"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiderMark } from "@/components/icons/RiderMark";
import { SpeedLines } from "@/components/icons/SpeedLines";
import { Wordmark } from "@/components/Wordmark";

interface SplashScreenProps {
  tagline: string;
}

const SESSION_KEY = "mototaxi-splash-played";
const EASE = [0.65, 0, 0.35, 1] as const;

function subscribe() {
  return () => {};
}

function getSkipSnapshot() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const played = sessionStorage.getItem(SESSION_KEY) === "1";
  return reduced || played;
}

// Server (and the first client render, to match hydration) always assumes
// "skip" — React re-renders automatically once the real client value differs.
function getServerSkipSnapshot() {
  return true;
}

export function SplashScreen({ tagline }: SplashScreenProps) {
  const shouldSkip = useSyncExternalStore(subscribe, getSkipSnapshot, getServerSkipSnapshot);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (shouldSkip) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    const timer = setTimeout(() => setDismissed(true), 2200);
    return () => clearTimeout(timer);
  }, [shouldSkip]);

  if (shouldSkip) return null;

  const visible = !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background"
        >
          <RiderMark animate duration={0.9} className="h-16 w-auto text-foreground" />
          <SpeedLines animate delay={0.85} className="h-6 w-24" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5, ease: EASE }}
          >
            <Wordmark size="lg" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5, ease: EASE }}
            className="font-display text-body-lg italic text-foreground-muted"
          >
            {tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
