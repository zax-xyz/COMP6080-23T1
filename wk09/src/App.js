import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoggedIn(username === "admin" && password === "password");
  };

  return (
    <div className="App">
      <header className="App-header">
        <form action="" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              name="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Log In</button>
        </form>
        <p>{loggedIn ? "logged in" : "not logged in :("}</p>
      </header>
    </div>
  );
}

export default App;
