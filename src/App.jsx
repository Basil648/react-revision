import React from "react";

function App() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Orange", color: "Orange" },
    { id: 4, name: "Grapes", color: "Purple" },
    { id: 5, name: "Mango", color: "Yellow" }
  ];

  return (
    <>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit) => (
          fruit.color === "Yellow" ? (
            <li key={fruit.id}>{fruit.name} is yello</li>
          ) : null
        ))}
      </ul>
    </>
  );
}

export default App;
