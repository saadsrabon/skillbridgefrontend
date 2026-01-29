import React from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function Sparkline({
  values,
  width = 140,
  height = 36,
}: {
  values: number[];
  width?: number;
  height?: number;
}) {
  const safe = values.length ? values : [0];
  const min = Math.min(...safe);
  const max = Math.max(...safe);
  const range = max - min || 1;

  const d = safe
    .map((v, i) => {
      const x = (i / Math.max(1, safe.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="text-primary">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function BarChart({
  data,
  height = 140,
}: {
  data: { label: string; value: number }[];
  height?: number;
}) {
  const max = Math.max(1, ...data.map((d) => d.value));

  return (
    <div className="grid gap-2">
      <div className="flex items-end gap-2">
        {data.map((d) => {
          const h = clamp((d.value / max) * height, 6, height);
          return (
            <div key={d.label} className="flex w-full flex-col items-center gap-2">
              <div
                className="w-full rounded-2xl border border-border bg-muted/60 p-1"
                style={{ height: height + 16 }}
              >
                <div
                  className="w-full rounded-xl bg-primary/80"
                  style={{ height: h, marginTop: height - h }}
                  title={`${d.label}: ${d.value}`}
                />
              </div>
              <div className="text-[11px] font-semibold text-muted-foreground">{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DonutChart({
  segments,
  size = 120,
  thickness = 14,
}: {
  segments: { label: string; value: number; color?: string }[];
  size?: number;
  thickness?: number;
}) {
  const total = segments.reduce((acc, s) => acc + s.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="flex items-center gap-5">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={thickness}
          fill="none"
        />
        {segments.map((s) => {
          const frac = s.value / total;
          const dash = frac * c;
          const color = s.color ?? "rgba(252,127,3,0.9)";
          const el = (
            <circle
              key={s.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke={color}
              strokeWidth={thickness}
              fill="none"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
          offset += dash;
          return el;
        })}
      </svg>

      <div className="grid gap-2">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-sm">
            <span className="inline-block size-2 rounded-full" style={{ background: s.color ?? "#fc7f03" }} />
            <span className="font-semibold">{s.label}</span>
            <span className="text-muted-foreground">{Math.round((s.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

