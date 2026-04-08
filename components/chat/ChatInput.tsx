import { Send } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="flex fixed bottom-10 items-center gap-5">
      <input
        type="text"
        placeholder="Nhắn cô ấy đi"
        className="rounded-4xl border-0 bg-gray-800 px-5 py-1 w-100"
      />
      <Send className="cursor-pointer border-1 rounded-2xl p-1 h-8 w-8 bg-gray-800 transition-all hover:opacity-80 active:opacity-50" />
    </div>
  );
};

export default ChatInput;
