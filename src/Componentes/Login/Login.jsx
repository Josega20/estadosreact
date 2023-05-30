import React from "react";
import "./Login.css";
import { useState } from "react";
const Login = ({ onSumitform }) => {
  //Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  console.log(email);
  const emailValid = "jose@desafiolatam.com";
  const passwordValid = "123456";

  const validarDatos = (e) => {
    e.preventDefault();
    if (email === emailValid && password === passwordValid) {
      return onSumitform(true);
    }
    return onSumitform(false);
  };
  const sumit = (e) => {
    setPassword(e.target.value);
    if (email !== "" && password !== "") {
      return setIsDisable(false);
      ;
    } else {
      setIsDisable(true);
    }
  };
  return (
    <form className="Login" onSubmit={validarDatos}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          name="Password"
          className="form-control"
          onChange={(e) => sumit(e)}
          value={password}
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={isDisable}>
        Submit
      </button>
    </form>
  );
};

export default Login;
