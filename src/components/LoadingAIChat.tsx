export default function LoadingAIChat() {
  return (
    <div className="flex justify-left mt-2 gap-1">
      <div className="animate-bounce w-2 h-2 bg-gray-400 rounded-full"></div>
      <div
        className="animate-bounce w-2 h-2 bg-gray-400 rounded-full"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="animate-bounce w-2 h-2 bg-gray-400 rounded-full"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
  );
}
