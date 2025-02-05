type MessageCardProps = {
  role: "assistant" | "user";
  message: string;
};

export default function MessageCard(props: MessageCardProps) {
  return (
    <div
      className={`p-3 w-fit max-w-[80%] whitespace-pre-line ${
        props.role === "user"
          ? "bg-gray-200 rounded-tr-2xl rounded-bl-2xl self-end"
          : "bg-blue-200 rounded-tl-2xl rounded-br-2xl self-start"
      }`}
    >
      <p className="text-gray-700 text-sm md:text-base">{props.message}</p>
    </div>
  );
}
