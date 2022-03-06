import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"

export const LoginForm = () => {
  console.log('Login form rendered');
  const user = {username: 'admin', password: '123'};
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRole = (event) => {
    if (username === user.username && password === user.password) {
      navigate("/admin");
    } else {
      navigate("/customers");
    }
  }
  let classes = "btn m-2 badge-";
  classes += username.length === 0 || password.length === 0 ? "warning" : "primary";
  const form = (
    <div className={classes}>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button 
      disabled={username.length === 0 || password.length === 0} 
      onClick={handleRole}>
        Login
      </button>
    </div>
  );
  return form;
};
