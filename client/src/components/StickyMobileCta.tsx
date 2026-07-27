import { WhatsAppButton } from "@/components/WhatsAppButton";

interface StickyMobileCtaProps {
  message: string;
  contact1Label: string;
  contact1Number: string;
  contact2Label: string;
  contact2Number: string;
}

export function StickyMobileCta({
  message,
  contact1Label,
  contact1Number,
  contact2Label,
  contact2Number,
}: StickyMobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-5 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <WhatsAppButton
          message={message}
          label={contact1Label}
          number={contact1Number}
          pulse
          className="w-full"
        />
        <WhatsAppButton
          message={message}
          label={contact2Label}
          number={contact2Number}
          variant="outline"
          className="w-full"
        />
      </div>
    </div>
  );
}
