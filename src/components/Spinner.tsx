export default function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center">
        <svg
          role="status"
          className="w-12 h-12 text-blue-500 animate-spin"
          viewBox="0 0 100 101"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M99.5 50.5C99.5 78.8 78.8 99.5 50 99.5C21.2 99.5 .5 78.8 .5 50C.5 21.2 21.2 .5 50 .5C78.8 .5 99.5 21.2 99.5 50.5ZM90 50.5C90 74.6 74.6 90 50 90C25.4 90 10 74.6 10 50C10 25.4 25.4 10 50 10C74.6 10 90 25.4 90 50.5ZM-1 50.5C-1 22.6 22.6 1 50 1C77.4 1 100 22.6 100 50.5C100 78.4 77.4 99.5 50 99.5C22.6 99.5 -1 78.4 -1 50.5Z"
          />
        </svg>
      </div>
    </div>
  );
}
