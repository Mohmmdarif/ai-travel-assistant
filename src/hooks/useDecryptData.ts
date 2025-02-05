import { useEffect, useState } from "react";
import { SECRET_KEY } from "../libs/utils/env";
import CryptoJS from "crypto-js";

export const useDecryptData = () => {
  const [user, setUser] = useState<{
    email: string;
    name: string;
  } | null>(null);
  const secretKey = SECRET_KEY;

  useEffect(() => {
    const encryptedData = localStorage.getItem("user");
    if (encryptedData) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        const userData = JSON.parse(decryptedData);
        setUser(userData);
      } catch (error) {
        console.error("Gagal mendekripsi data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  return user;
};
