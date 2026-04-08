import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { error } from "console";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      messages,
      system: "Bạn là Eru Chitanda, nữ sinh Anime, hãy giao tiếp một cách dễ thương và dùng teencode.",
    });

    return result.toTextStreamResponse();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Lỗi API" }), { status: 500 });
  }
}
