import React, { useEffect, useRef } from "react";

type AIFormInputProps = {
  input: string;
  setInput: (input: string) => void;
  loading: boolean;
  handleSendMessage: (e: React.FormEvent) => void;
};

export default function AIFormInput(props: AIFormInputProps) {
  const { input, setInput, loading, handleSendMessage } = props;

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <form className="p-2 flex items-center gap-2" onSubmit={handleSendMessage}>
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="w-full px-2 py-1.5 border-2 border-gray-200 rounded-md text-sm md:text-base"
      />
      <button
        className={`bg-[#2563EB] text-white px-4 py-4.5 md:py-5 rounded-md hover:bg-[#1E4BB2] cursor-pointer text-sm md:text-base ${
          loading ? "bg-blue-300 cursor-not-allowed" : ""
        }`}
        disabled={!input.trim() || loading}
      >
        Send
      </button>
    </form>
  );
}
