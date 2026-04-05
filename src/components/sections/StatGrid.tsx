interface Stat {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: Stat[];
  light?: boolean;
}

export function StatGrid({ stats, light = false }: StatGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1.5">
          <span
            className="font-light tracking-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: light ? "#ffffff" : "#000000",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {stat.value}
          </span>
          <span
            className="text-label"
            style={{ color: light ? "rgba(255,255,255,0.4)" : "#777169" }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
