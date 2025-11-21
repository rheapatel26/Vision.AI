import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { idea } = await req.json();

    const prompt = `Aesthetic Pinterest-style moodboard based on: ${idea}.
Soft lighting, collage layout, minimal clean style, visual storytelling.`;

    const HF_MODEL = process.env.HUGGINGFACE_MODEL;
    const HF_KEY = process.env.HUGGINGFACE_API_KEY;

    const response = await fetch(
      `https://router.huggingface.co/hf-inference/models/${HF_MODEL}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            guidance_scale: 3.5,
            num_inference_steps: 28,
            width: 1024,
            height: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("HuggingFace API Error:", err);
      return NextResponse.json(
        { error: "Image generation failed", details: err },
        { status: 500 }
      );
    }

    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return NextResponse.json({
      images: [`data:image/png;base64,${base64}`],
    });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Server failed", details: err.message },
      { status: 500 }
    );
  }
}
