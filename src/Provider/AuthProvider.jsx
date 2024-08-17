import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={"test"}>{children}</AuthContext.Provider>;
};
