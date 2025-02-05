import { FaRobot } from "react-icons/fa";

export default function AIHeader() {
  return (
    <div className="p-4 flex items-center gap-2 border-b-2 border-gray-200">
      <FaRobot size={25} className="text-[#2563EB]" />
      <h2 className="font-bold text-lg md:text-xl">AI Travel Assistant</h2>
    </div>
  );
}
