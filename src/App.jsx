import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const counter = () => {
    setCount (count + 1)
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>click me </button>
    </>
  );
}

export default App;
