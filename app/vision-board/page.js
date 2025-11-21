"use client";
import { useSearchParams } from "next/navigation";
import Moodboard from "../../components/Moodboard";
import BottomNav from "../../components/BottomNav";

export default function VisionBoardPage() {
  const search = useSearchParams();
  const idea = search?.get("idea") || "";

  return (
    <div style={{ minHeight: "100vh", paddingBottom: 84 }}>
      <header style={{ padding: 20, borderBottom: "1px solid #eee" }}>
        <h3 style={{ margin: 0 }}>Your Idea</h3>
        <div style={{ color: "#666", fontSize: 13 }}>{idea}</div>
      </header>

      <main style={{ padding: 16 }}>
        <Moodboard idea={idea} />
      </main>

      <BottomNav />
    </div>
  );
}