import { useState } from "react";
import "./App.css";
import Alerts from "./Componentes/Alerts/Alerts";
import Login from "./Componentes/Login";
function App() {
  const [isValid,setISValid]= useState();
  const handlerSumitResult = (e) => {
   setISValid(e);
  };

  return (
    <div className="App">
      <Login onSumitform={(e) => handlerSumitResult(e)}></Login>
      <Alerts 
      text={isValid ? "Bienvenido": "Usuario o contraseña incorrectos"}
      variant={isValid ? "success": "warning"}>


      </Alerts>
    </div>
  );
}

export default App;
