import { Link } from "react-router-dom";
import AIChat from "../components/AIChat";
import useAIAssistant from "../hooks/useAIAssistant";
import { useEffect } from "react";

const Chat = () => {
  const { messages, input, setInput, loading, handleSendMessage } =
    useAIAssistant();

  useEffect(() => {
    const savedInput = localStorage.getItem("question");
    if (savedInput) {
      setInput(savedInput);
      localStorage.removeItem("question");
    }
  }, [setInput]);

  return (
    <div className="h-screen p-4">
      <Link
        to="/"
        className="mb-4 inline-block text-blue-500 hover:text-blue-600"
      >
        ← Back to Countries
      </Link>
      <AIChat
        messages={messages}
        input={input}
        setInput={setInput}
        loading={loading}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Chat;
