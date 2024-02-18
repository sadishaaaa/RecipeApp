import axios from "axios";

export const getProfile = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    try {
      const response = await axios.get("http://localhost:8000/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
  return null;
};
