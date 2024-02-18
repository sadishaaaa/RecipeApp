import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkAuth = async () => {
    const data = await getProfile();
    if (!data) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    console.log("abc");
    checkAuth();
  }, []);
  return isLoggedIn;
};
