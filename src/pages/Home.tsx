import AIChat from "../components/AIChat";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { GET_COUNTRIES } from "../api/graphql/queries";
import { useQuery } from "@apollo/client";
import useAIAssistant from "../hooks/useAIAssistant";
import { useDecryptData } from "../hooks/useDecryptData";
import useScreenSize from "../hooks/useScreenSize";

const Home = () => {
  const {
    error,
    loading: loadingData,
    data: countries,
  } = useQuery(GET_COUNTRIES);
  const { messages, input, setInput, loading, handleSendMessage } =
    useAIAssistant();

  const user = useDecryptData();
  const isMobile = useScreenSize();

  if (loadingData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    console.error(error);
    return "Terjadi kesalahan saat memuat data...";
  }

  return (
    <div className="flex flex-col mt-4 h-full">
      <span className="font-semibold ml-3">Welcome, {user?.name}</span>
      <div className="flex flex-col gap-0 lg:flex-row md:gap-4">
        <div className="w-full lg:min-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-0 md:my-4">
          <Card data={countries} setInput={setInput} />
        </div>
        {!isMobile && (
          <div className="w-full">
            <AIChat
              messages={messages}
              input={input}
              setInput={setInput}
              loading={loading}
              handleSendMessage={handleSendMessage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
