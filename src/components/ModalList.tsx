import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../api/graphql/queries";
import { AiOutlineClose } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import useScreenSize from "../hooks/useScreenSize";
import { useNavigate } from "react-router-dom";

interface ModalListProps {
  code: string;
  setIsModalOpen: (isOpen: boolean) => void;
  setInput: (input: string) => void;
}

export const ModalList = ({
  code,
  setInput,
  setIsModalOpen,
}: ModalListProps) => {
  const { error, loading, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });
  const navigate = useNavigate();
  const isMobile = useScreenSize();

  const handleAskAI = () => {
    const question = `Tell me about ${data?.country.name}`;
    setInput(question);
    localStorage.setItem("question", question);
    setIsModalOpen(false);

    if (isMobile) {
      navigate("/chat");
    }
  };

  const countryDetails = [
    { label: "Capital", value: data?.country.capital },
    { label: "Continent", value: data?.country.continent.name },
    { label: "Currency", value: data?.country.currency },
    { label: "Phone code", value: `+${data?.country.phone}` },
    {
      label: "Languages",
      value: data?.country.languages
        .map((lang: { name: string }) => lang.name)
        .join(", "),
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : </p>;

  return (
    <div className="fixed inset-0 py-3 bg-gray-900/50 flex items-center justify-center overflow-hidden z-10">
      <div className="bg-white p-6 mx-4 md:mx-0 min-w-sm md:min-w-md max-w-lg h-fit rounded-lg overflow-hidden">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            {data?.country.emoji}{" "}
            <sup className="text-lg md:text-xl">{data?.country.name}</sup>
          </h2>
          <button
            className="mb-4 hover:bg-gray-100 hover:rounded-full p-2 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <AiOutlineClose size={20} className="dark:text-black" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {countryDetails.map((item, index) => (
            <div key={index}>
              <h3 className="text-xs md:text-sm font-semibold">{item.label}</h3>
              <p className="text-sm md:text-base text-wrap">
                {item.value || "N/A"}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full mt-8">
          <button
            className="text-left flex items-center place-self-end gap-2 bg-blue-500 text-white px-4 py-2 rounded-md text-wrap font-semibold text-sm md:text-base"
            onClick={handleAskAI}
          >
            <FaRobot size={20} className="text-white" />
            Ask AI about {data?.country.name}
          </button>
        </div>
      </div>
    </div>
  );
};
