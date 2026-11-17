import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalLogin } from "../services/api/apiRoutes.js";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const gitHubSignIn = async (userData) => {
    try {
      if (userData && userData.userId) {
        setUser(userData);
        await AsyncStorage.setItem("@user", JSON.stringify(userData));
      } else {
        console.error("Erro: Dados do GitHub não estão no formato esperado.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Erro no login via GitHub:", error);
    }
  };

  const signIn = async (data) => {
    try {
      console.log("Dados de login:", data);
      const userData = await LocalLogin(data);

      if (userData && userData.userId) {
        setUser(userData);
        await AsyncStorage.setItem("@user", JSON.stringify(userData));
      } else {
        console.error("Erro: Resposta da API não contém os dados esperados.");
      }
    } catch (error) {
      console.error("Erro no login local:", error);
    }
  };

  // Logout
  const signOut = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem("@user");
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "home" }],
      // });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const loadUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("@user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && typeof parsedUser === "object") {
          setUser(parsedUser);
        } else {
          console.error("Erro: Dados do AsyncStorage estão mal formatados.");
        }
      }
    } catch (error) {
      console.error("Erro ao carregar o usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    console.log("AuthProvider inicializado");
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, gitHubSignIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
