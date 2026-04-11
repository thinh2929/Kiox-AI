"use client";
import { useChat } from "@ai-sdk/react";
import SideBar from "@/components/ui/SideBar";
import ChatSection from "@/components/ui/ChatSection";
import ChatHeader from "@/components/ui/ChatHeader";
import { useEffect, useState } from "react";

export default function Home() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark");

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage({
      role: "user",
      parts: [{ type: "text", text: input }],
    });

    setInput("");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: any) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={`flex theme-provider ${theme} h-screen overflow-hidden`}>
      <SideBar theme={theme} setTheme={setTheme} />
      <div className="flex flex-col w-full">
        <ChatHeader />
        <ChatSection
          input={input}
          setInput={setInput}
          onSend={handleSend}
          messages={messages}
        />
      </div>
    </div>
  );
}
