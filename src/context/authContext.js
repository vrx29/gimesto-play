import { createContext, useContext, useEffect, useState } from "react";
import { useAuthHandler } from "hooks";
import { initialAuthState } from "reducers/states";


const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const [userAuthState, setUserAuthState] = useState({});
  const { getCookie } = useAuthHandler();
  const authData = getCookie();

  useEffect(() => {
    setUserAuthState({ ...authData });
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ userAuthState, setUserAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
