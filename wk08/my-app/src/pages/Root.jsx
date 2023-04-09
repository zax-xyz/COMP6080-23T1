import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Root = () => {
  const { user } = useContext(UserContext);
  return <div>Hi {user}!</div>;
};

export default Root;
