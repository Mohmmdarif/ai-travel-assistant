import { useState } from "react";
import { getAIResponse } from "../api/getAIResponse";

export type TMessage = {
  role: "assistant" | "user";
  content: string;
};

const useAIAssistant = () => {
  const [messages, setMessages] = useState<TMessage[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI travel assistant.",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (input.trim()) {
        const newMessage: TMessage = {
          role: "user",
          content: input,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        const response = await getAIResponse(input);

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content: response.content,
          },
        ]);
        setInput("");
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content:
            error instanceof Error ? error.message : "Terjadi kesalahan.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    loading,
    handleSendMessage,
  };
};

export default useAIAssistant;
