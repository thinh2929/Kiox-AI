import { UIMessage } from "ai";

interface ChatContainerProps {
  messages: UIMessage[];
}

const ChatContainer = ({ messages }: ChatContainerProps) => {
  return (
    <div className="h-screen w-full overflow-y-scroll pb-35 px-[25%]">
      {messages.length === 0 && (
        <div className="text-center mt-[10%] text-zinc-500">
          Hãy bắt đầu trò truyện với bạn gái Anime của bạn.
        </div>
      )}

      {messages.map((m: any) => (
        <div
          key={m.id}
          className={`p-4 rounded-2xl max-w-[90%] w-fit my-5 ${
            m.role === "user"
              ? "ml-auto bg-(--side-bar)"
              : "mr-auto bg-pink-900/20 border border-pink-500/30"
          }`}>
          <p
            className={`text-xs font-bold mb-1 uppercase tracking-widest ${
              m.role === "user" ? "text-zinc-500" : "text-pink-500"
            }`}>
            {m.role === "user" ? "Bạn" : "Chitanda"}
          </p>

          <div className="text-zinc-200 whitespace-pre-wrap leading-relaxed">
            {/* 1. Ưu tiên render parts (Chuẩn v4) */}
            {m.parts && m.parts.length > 0 ? (
              m.parts.map((part: any, i: number) => {
                if (part.type === "text")
                  return <span key={i} className="text-(--text-color)">{part.text}</span>;
                return null;
              })
            ) : (
              /* 2. Dự phòng m.content (Chuẩn v3 hoặc fallback) */
              <span>{m.content}</span>
            )}

            {/* 3. Hiệu ứng đang gõ nếu tin nhắn trống */}
            {!m.content && (!m.parts || m.parts.length === 0) && (
              <span className="animate-pulse">...</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
