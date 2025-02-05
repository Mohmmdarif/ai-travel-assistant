import MessageCard from "./MessageCard";
import AIHeader from "./AIHeader";
import AIFormInput from "./AIFormInput";
import LoadingAIChat from "./LoadingAIChat";

import { TMessage } from "../hooks/useAIAssistant";

type AIChatProps = {
  messages: TMessage[];
  input: string;
  setInput: (input: string) => void;
  loading: boolean;
  handleSendMessage: (e: React.FormEvent) => void;
};

export default function AIChat(props: AIChatProps) {
  const { messages, input, setInput, loading, handleSendMessage } = props;

  return (
    <div
      className="min-h-[75vh] max-h-[75vh] w-full
         bg-white p-4 shadow-sm rounded-md md:p-0 md:my-4 flex flex-col justify-between"
    >
      <AIHeader />
      <div className="flex-1 overflow-y-auto flex flex-col gap-2 m-2">
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            role={message.role}
            message={message.content}
          />
        ))}
        {loading && <LoadingAIChat />}
      </div>
      <AIFormInput
        input={input}
        setInput={setInput}
        loading={loading}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}
