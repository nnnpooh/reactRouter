import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", true);
    history.push("/");
  };

  return (
    <div>
      <h1>login</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}

export default Login;
