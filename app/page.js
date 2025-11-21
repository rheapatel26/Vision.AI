"use client";
import { useState } from "react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateVisionBoard = async () => {
    if (!idea.trim()) return;

    setLoading(true);
    setImages([]);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      // Handle backend errors
      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", errorText);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setImages(data.images || []);
    } catch (err) {
      console.error("Fetch Error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Vision AI</h1>

        {/* Input */}
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your idea..."
          className="w-full p-4 rounded-lg border border-gray-300 mb-4 focus:outline-none"
          rows={4}
        />

        {/* Button */}
        <button
          onClick={generateVisionBoard}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          disabled={loading}
        >
          {loading ? "Generating..." : "Create Vision Board"}
        </button>

        {/* Loading spinner */}
        {loading && (
          <div className="mt-6 text-lg animate-pulse text-gray-600">
            Creating your mood board...
          </div>
        )}

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Mood board"
              className="w-full rounded-xl shadow-md object-cover"
            /> 
          ))}
        </div>
      </div>
    </div>
  );
}
