import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0); // [0, fn]

  //   function increaseFn() {
  //     setCounter(counter + 1);
  //   }

  //   function decreaseFn() {
  //     setCounter(counter - 1);
  //   }

  // We can do another way also

  function increaseFn() {
    // setCounter(function (oldCounterValue) {
    //   return oldCounterValue + 1;
    // });
    // Using Arrow Function
    setCounter((oldCounterValue) => oldCounterValue + 1);
  }

  function decreaseFn() {
    // setCounter(function (oldCounterValue) {
    //   return oldCounterValue - 1;
    // });
    if (counter === 0) {
      return;
    }
    // otherwise
    setCounter((oldCounterValue) => oldCounterValue - 1);
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increaseFn}>Increase the number</button>
      <button onClick={decreaseFn}>Decrease the number</button>
    </div>
  );
}

export default Counter;
