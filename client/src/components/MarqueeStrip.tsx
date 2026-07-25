interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-surface-alt py-3">
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-small font-medium uppercase tracking-[0.12em] text-foreground-muted"
          >
            {item}
            <span aria-hidden="true" className="text-gold">
              {"///"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
