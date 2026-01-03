from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests, json

app = FastAPI()

LLAMA_API = "http://localhost:11434/v1/chat/completions"

class VisionRequest(BaseModel):
    idea: str

@app.post("/generate-plan")
def generate_plan(req: VisionRequest):

    prompt = f"""
You are a visual prompt engineer.

User idea:
"{req.idea}"

Return ONLY valid JSON in this exact format:
{{
  "board_theme": string,
  "images": [
    {{
      "title": string,
      "category": string,
      "base_prompt": string,
      "style_prompt": string,
      "negative_prompt": string
    }}
  ]
}}
Do not include markdown. Do not explain.
"""

    payload = {
        "model": "llama3",
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.4
    }

    try:
        response = requests.post(LLAMA_API, json=payload, timeout=60)
    except requests.exceptions.ConnectionError:
        raise HTTPException(
            status_code=500,
            detail="Ollama not running on localhost:11434"
        )

    if response.status_code != 200:
        raise HTTPException(
            status_code=500,
            detail=f"Ollama error: {response.text}"
        )

    content = response.json()["choices"][0]["message"]["content"]

    try:
        return json.loads(content)
    except json.JSONDecodeError:
        return {
            "error": "Invalid JSON from LLM",
            "raw_output": content
        }
