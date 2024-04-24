import { useState, useEffect } from "react";

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.data.accessToken) {
      setAccessToken(user.data.accessToken);
    } else {
      console.error("Access token not found in local storage");
    }
  }, []);

  return accessToken;
};

export default useAccessToken;
