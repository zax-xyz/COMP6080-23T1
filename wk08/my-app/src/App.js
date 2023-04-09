import logo from "./logo.svg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Login from "./pages/Login";
import { Container } from "@mui/material";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import Quiz from "./pages/Quiz";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/login", element: <Login /> },
  { path: "/quiz/:quizId", element: <Quiz /> },
]);

function App() {
  const [user, setUser] = useState("");

  return (
    <Container>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </Container>
  );
}

export default App;
