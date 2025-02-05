const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h2 className="text-7xl font-bold text-blue-500">404</h2>
      <h3 className="text-2xl font-semibold mt-2">Page Not Found</h3>
      <p className="text-gray-600 mt-2 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
