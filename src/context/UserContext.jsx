import {createContext, useState, useEffect,} from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

  // Get data from localStorage
  const storedUser =
    localStorage.getItem("username") || "Hemant";

  // State
  const [username, setUsername] =
    useState(storedUser);

  // Store data in localStorage
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  return (
    <UserContext.Provider
      value={{username,setUsername,}}
    >
      {children}
    </UserContext.Provider>
  );
}