import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Button from "./components/Button";

function App() {
  const [greeting, setGreeting] = useState("Hello world");
  const handleClick = () => {
    setGreeting("Goodbye");
  };

  return (
    <div>
      {greeting}
      <Button onClick={handleClick}>aldskjf</Button>
    </div>
  );
}

export default App;
