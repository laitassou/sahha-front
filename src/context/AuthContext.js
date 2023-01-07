import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  localStorage.clear()
  const [authTokens, setAuthTokens] = useState(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) 
      return  JSON.parse(localStorage.getItem("authTokens"))
    else
      return  null
   }
  );
  const [user, setUser] = useState(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) 
        return  JSON.parse(localStorage.getItem("authTokens"))
      else
        return  null
      }
    );
  const [loading, setLoading] = useState(true);

  const history = useHistory({});

  const loginUser = async (email, password) => {
    const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      //const decode = jwt_decode(data)
      setUser(data);
    
      localStorage.setItem("authTokens", JSON.stringify(data));
      history.go("/");
    } else {
      alert("Something went wrong!");
    }
  };

  const registerUser = async (first_name, last_name, email, role, password, confirm_password) => {
    const response = await fetch("http://127.0.0.1:8000/api/user/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        role,
        password,
        confirm_password
      })
    });
    //response.header("Access-Control-Allow-Origin", "*");
    //response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (response.status === 200) {
      history.push("/login");

    } else {
      alert("Erreur d'enregistrement");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history.push("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
