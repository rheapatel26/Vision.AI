"use client";
import Link from "next/link";

export default function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 12,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "auto",
      }}
    >
      <div style={{ width: "min(720px, 96%)", background: "#fff", borderRadius: 14, padding: 10, boxShadow: "0 6px 18px rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-around" }}>
        <Link href="/" style={{ color: "#333", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>

        <button aria-label="pins" style={{ background: "transparent", border: "none", padding: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9 0 4.97-4.03 9-9 9z" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <button aria-label="stats" style={{ background: "transparent", border: "none", padding: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 13v-6" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 13V7" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 13v-3" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </nav>
  );
}