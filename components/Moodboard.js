"use client";
import { useEffect, useState } from "react";

export default function Moodboard({ idea }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idea) return;
    let mounted = true;
    async function fetchImages() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idea }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.details || data?.error || "Generation failed");
        if (mounted) setImages(data.images || []);
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchImages();
    return () => {
      mounted = false;
    };
  }, [idea]);

  if (!idea) return <div style={{ color: "#666" }}>No idea provided.</div>;
  if (loading) return <div style={{ color: "#666" }}>Generating images…</div>;
  if (error) return <div style={{ color: "crimson" }}>Error: {error}</div>;
  if (!images.length) return <div style={{ color: "#666" }}>No images returned.</div>;

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 12,
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            background: "#fafafa",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <img src={src} alt={`pin-${i}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      ))}
    </section>
  );
}