import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
import axios from "axios";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("mangagamit")) || null
  );

  const [chatBoxStatus, setChatBoxStatus] = useState(false);

  const login = async (inputs) => {
    const res = await axios.post(
      // "http://localhost:8800/api/auth/login",
      "https://faithbook.onrender.com/api/auth/login",

      inputs,
      {
        withCredentials: true,
      }
    );

    console.log("RESPONSE DATA : ", res.data);
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("mangagamit", JSON.stringify(currentUser));
  }, [currentUser]);

  console.log("setChatboxStatus : ", chatBoxStatus);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, setChatBoxStatus, chatBoxStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};
