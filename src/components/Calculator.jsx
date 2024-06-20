import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const suma = () => {
    if (!validarOperacion()) return;
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const resta = () => {
    if (!validarOperacion()) return;
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const multiplicacion = () => {
    if (!validarOperacion()) return;
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const division = () => {
    if (!validarOperacion() || parseFloat(num2) === 0) {
      setError("¡Error! Dividir por cero esta feo.");
      setResult(null);
      return;
    }
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  const validarOperacion = () => {
    if (num1.trim() === "" || num2.trim() === "") {
      setError("¡Error! Falta algún número.");
      setResult(null);
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div className="calculator">
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
        />
      </div>
      <div>
        <button onClick={suma}>Sumar</button>
        <button onClick={resta}>Restar</button>
        <button onClick={multiplicacion}>Multiplicar</button>
        <button onClick={division}>Dividir</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {result !== null && (
        <div className="resultado">
          <p>Resultado: {result}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
