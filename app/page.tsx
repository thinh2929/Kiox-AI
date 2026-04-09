"use client";
import { useChat } from "@ai-sdk/react";
import SideBar from "@/components/ui/SideBar";
import ChatSection from "@/components/ui/ChatSection";
import ChatHeader from "@/components/ui/ChatHeader";
import { useState } from "react";

export default function Home() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    
    await sendMessage({
      role: "user",
      parts: [
        { type: "text", text: input }
      ]
    });

    setInput("");
  };

  console.log(messages);

  return (
    <div className="flex bg-zinc-50 font-sans dark:bg-gray-950 h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col w-full">
        <ChatHeader />
        <ChatSection input={input} setInput={setInput} onSend={handleSend} messages={messages}/>
      </div>
    </div>
  );
}
