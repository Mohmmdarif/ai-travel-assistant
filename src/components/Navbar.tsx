import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <nav className="flex flex-row justify-between items-center p-4 bg-white text-[#2563EB] shadow-sm shadow-gray">
      <Link to="/" className="text-lg md:text-2xl font-bold">
        World Explorer
      </Link>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded-md cursor-pointer font-semibold text-sm md:text-base"
      >
        Logout
      </button>
    </nav>
  );
}
