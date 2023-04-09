import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);

  const onSubmit = () => {
    setUser(username);
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <TextField label="Password" type="password" />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
