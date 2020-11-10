import React from "react";

export default function App() {
  const [clicks, setClicks] = React.useState(0);

  function increment() {
    setClicks((x) => x + 1);
  }

  function decrement() {
    setClicks((x) => x - 1);
  }

  return (
    <>
      <h1>Clicked {clicks} times!</h1>
      <button onClick={increment}>Add click</button>
      <button onClick={decrement}>Remove click</button>
    </>
  );
}
