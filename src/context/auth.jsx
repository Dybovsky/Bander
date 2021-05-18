import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import localForage from "localforage";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  saveToken: (userObj) => {},
  setToken: () => {},
  setUser: () => {},
  removeToken: () => {},
  user: {},
  baseURL: "http://localhost:5050",
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [token, setToken] = useState({});
  const [user, setUser] = useState({});
  const baseURL = "http://localhost:5050";

  const saveToken = (userObj) => {
    setUser(userObj.curUser);
    setToken(userObj.token);
    localForage.setItem("token", userObj.token);
    localForage.setItem("user", userObj.curUser);
  };

  const removeToken = () => {
    setUser(null);
    setToken(null);
    localForage.removeItem("token");
    localForage.removeItem("user");
  };

  useEffect(async () => {
    const temp = await localForage.getItem("token");
    const userInfo = await localForage.getItem("user");
    setToken(temp);
    setUser(userInfo);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        baseURL,
        setToken,
        setUser,
        saveToken,
        removeToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
