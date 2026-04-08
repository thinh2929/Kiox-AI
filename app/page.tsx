'use client';
import { useChat } from "@ai-sdk/react";
import { streamText } from "ai";
import Image from "next/image";
import SideBar from "@/components/ui/SideBar";
import ChatSection from "@/components/ui/ChatSection";

export default function Home() {
  return (
    <div className="flex bg-zinc-50 font-sans dark:bg-gray-950">       
        <SideBar />
        <ChatSection />
    </div>
  );
}
