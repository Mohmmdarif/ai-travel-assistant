type ButtonPaginationProps = {
  page: number;
  totalPages: number;
  handleNext: () => void;
  handlePrev: () => void;
};

export default function ButtonPagination({
  page,
  totalPages,
  handleNext,
  handlePrev,
}: ButtonPaginationProps) {
  return (
    <div className="w-full flex justify-center gap-4 mt-4">
      <div>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md text-sm md:text-base ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600 font-semibold"
          }`}
        >
          Prev
        </button>
        <span className="px-2 py-2 text-sm md:text-base">
          Page <strong>{page}</strong> of <strong>{totalPages}</strong>
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-md text-sm md:text-base ${
            page === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600 font-semibold"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
