import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { SECRET_KEY } from "../libs/utils/env";
import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";

type TGoogleLoginResponse = {
  tokenId: string;
  accessToken: string;
  email: string;
  name: string;
  exp: number;
};

export const useEncryptLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("user");
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  const handleGoogleLogin = (credentialResponse: any) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential);
      const { email, name, exp } = decodedToken as TGoogleLoginResponse;

      if (exp < Date.now() / 1000) {
        throw new Error("Token expired");
      }

      const secretKey = SECRET_KEY;
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify({ email, name }),
        secretKey
      ).toString();

      localStorage.setItem("user", encryptedData);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error instanceof Error ? error.message : "Terjadi kesalahan saat login"
      );
    }
  };

  return {
    loading,
    setLoading,
    error,
    setError,
    handleGoogleLogin,
  };
};
