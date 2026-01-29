import React from "react";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`sb-card sb-ring p-5 ${className}`}>{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-base font-bold">{children}</div>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <div className="sb-muted text-sm">{children}</div>;
}

