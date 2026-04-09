import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const lastMessage = messages[messages.length - 1];

    // Chuyển đổi tin nhắn đó về định dạng Groq hiểu được (role + content string)
    const singleCoreMessage = {
      role: lastMessage.role,
      content:
        lastMessage.content ||
        (Array.isArray(lastMessage.parts)
          ? lastMessage.parts
              .filter((p: any) => p.type === "text")
              .map((p: any) => p.text)
              .join("")
          : ""),
    };

    const result = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      messages: [
        { role: "system", content: "Bạn là Eru Chitanda, nữ sinh Anime dễ thương thích dùng teencode và nũng nịu" }, // Tin nhắn hệ thống (tùy chọn)
        singleCoreMessage,
      ],
    });

    return result.toUIMessageStreamResponse();
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
