import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { setAuthToken } from "../util/handler";
import { toast } from "sonner";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const login = async (formData) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed.");
      }

      const data = await response.json();
      setAuthToken(data.token);
      setUser(data);
      toast.success("User Logged in Successfully");

    } catch (err) {
      toast.error(err.message);
    }
  };



  const value = {
    user,
    loading,
    login
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
