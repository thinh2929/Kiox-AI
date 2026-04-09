import { Send } from "lucide-react";
import { useState } from 'react';

interface ChatInputProps {
  input: string,
  setInput:any,
  onSend: any;
}

const ChatInput = ({ input, setInput, onSend }: ChatInputProps) => {

  return (
    <form onSubmit={(e) => {e.preventDefault();onSend()}} className="flex fixed bottom-10 items-center gap-5">
      <input
        type="text"
        value={input}
        placeholder="Nhắn cô ấy đi"
        className="rounded-4xl border-0 bg-gray-800 px-5 py-1 w-100"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit"><Send className="cursor-pointer border-gray-50 border rounded-2xl p-1 h-8 w-8 bg-gray-800 transition-all hover:opacity-80 active:opacity-50" /></button>
    </form>
  );
};

export default ChatInput;
