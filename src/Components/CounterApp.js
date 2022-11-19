import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const clickHandler = (e) => {
    setCounter(counter + 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  const substractHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <h3>Counter: {counter}</h3>
      <br />
      <button onClick={clickHandler}>+1</button>
      <button onClick={resetHandler}>Resetear Contador</button>
      <button onClick={substractHandler}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
