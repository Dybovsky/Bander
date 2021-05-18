import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  setIsLoggedIn: () => {},
  setToken: () => {},
  setUser: () => {},
  user: {},
  baseURL: "http://localhost:5050",
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const baseURL = "http://localhost:5050";
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        user,
        baseURL,
        setIsLoggedIn,
        setToken,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
