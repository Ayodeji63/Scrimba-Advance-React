import React, { Component, useState } from "react";
import useCounter from "./useCounter"

function App() {
    const [add, increase] = useCounter()
  return (
    <div>
      <h1>The count is {add}</h1>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}

export default App;
