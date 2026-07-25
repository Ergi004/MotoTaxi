import { WhatsAppButton } from "@/components/WhatsAppButton";

interface StickyMobileCtaProps {
  message: string;
  label: string;
}

export function StickyMobileCta({ message, label }: StickyMobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-5 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur md:hidden">
      <WhatsAppButton message={message} label={label} pulse className="w-full" />
    </div>
  );
}
