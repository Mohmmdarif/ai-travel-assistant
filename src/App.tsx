import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

import useScreenSize from "./hooks/useScreenSize";
import Chat from "./pages/Chat";
import { useEffect } from "react";

function App() {
  const pathLocation = useLocation();
  const navigate = useNavigate();
  const isMobile = useScreenSize();

  const hideNavbarRoutes = ["/login"];
  const hideNavbar = hideNavbarRoutes.includes(pathLocation.pathname);

  useEffect(() => {
    if (pathLocation.pathname === "/chat" && !isMobile) {
      navigate("/");
    }
  }, [pathLocation.pathname, isMobile, navigate]);

  return (
    <>
      {!hideNavbar && (
        <header>
          <Navbar />
        </header>
      )}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {isMobile && (
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
