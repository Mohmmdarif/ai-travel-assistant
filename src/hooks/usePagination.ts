import { useState } from "react";

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
};

const usePagination = ({ data }: CardProps) => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(data?.countries?.length / itemsPerPage);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  const paginatedCountries = data?.countries?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return { page, totalPages, handleNext, handlePrev, paginatedCountries };
};

export default usePagination;
