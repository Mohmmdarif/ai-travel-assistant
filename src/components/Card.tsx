import { useState } from "react";

import ItemList from "./ItemList";
import { ModalList } from "./ModalList";
import ButtonPagination from "./ButtonPagination";

import usePagination from "../hooks/usePagination";

type TCountry = {
  code: string;
  name: string;
  emoji: string;
  currency: string;
  capital: string;
};

type CardProps = {
  data: {
    countries: TCountry[];
  };
  setInput: (input: string) => void;
};

export default function Card({ data, setInput }: CardProps) {
  const { page, totalPages, handleNext, handlePrev, paginatedCountries } =
    usePagination({ data });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleClickedCard = (code: string) => {
    setIsModalOpen(true);
    setSelectedCountry(code);
  };

  return (
    <>
      {paginatedCountries?.map((country: TCountry) => {
        return (
          <button
            className="bg-white w-full px-4 py-4 shadow-sm rounded-md text-left cursor-pointer hover:bg-gray-100"
            key={country.code}
            onClick={() => handleClickedCard(country.code)}
          >
            <ItemList {...country} />
          </button>
        );
      })}
      <ButtonPagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />

      {isModalOpen && (
        <ModalList
          code={selectedCountry}
          setIsModalOpen={setIsModalOpen}
          setInput={setInput}
        />
      )}
    </>
  );
}
