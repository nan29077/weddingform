import Link from "next/link";

export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const color = tone === "ink" ? "text-ink" : "text-white";
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${color}`} aria-label="웨딩폼 홈">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="1" y="1" width="26" height="26" rx="7" fill="currentColor" opacity="0.08" />
        <rect x="6" y="6" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="15" y="15" width="3" height="3" rx="0.8" fill="currentColor" />
        <rect x="19" y="19" width="3" height="3" rx="0.8" fill="currentColor" />
        <path
          d="M19.5 7.2c.9-1 2.6-.6 2.6.9 0 1.4-2.6 3-2.6 3s-2.6-1.6-2.6-3c0-1.5 1.7-1.9 2.6-.9z"
          fill="#d6457a"
        />
      </svg>
      <span className="font-display text-[1.35rem] font-bold tracking-tight">웨딩폼</span>
    </Link>
  );
}
