function App() {
  const isLoggedIn = true; // try changing to false also

  return (
    <div>
      <h2>{isLoggedIn ? "sorry acess denied" : "welcum bekk"}</h2>
    </div>
  );
}

export default App;
