import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
  const navigate = useNavigate();
  const authentication = async () => {
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken !== "") {
      try {
        const response = await axios.get("http://localhost:8000/users/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        // If there's an error, navigate to the login page
        navigate("/login");
      }
    } else {
      // If there's no access token, navigate to the login page
      navigate("/login");
    }
  };
  useEffect(() => {
    authentication();
  }, []);
  return null;
};

export default AuthCheck;
