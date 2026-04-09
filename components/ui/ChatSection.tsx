import ChatInput from "@/components/chat/ChatInput";
import ChatContainer from "@/components/chat/ChatContainer";

interface ChatInputProps {
  messages: any[];
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
}

const ChatSection = ({ messages, input, setInput, onSend }: ChatInputProps) => {
  return (
    <div className="h-screen flex flex-col flex-1 items-center">
      <ChatContainer messages={messages} />

      <ChatInput input={input} setInput={setInput} onSend={onSend} />
    </div>
  );
};

export default ChatSection;
