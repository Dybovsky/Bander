import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  logOut: async () => {},
  user: {},
  baseURL: "http://localhost:5050",
});

const tokenKey = "userToken";
const userKey = "userData";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const baseURL = "http://localhost:5050";
  return (
    <AuthContext.Provider value={{ isLoggedIn, token, user, baseURL }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
