import { useSelector } from "react-redux";
import Login from "../components/Login";
import Home from "../components/Home";

function Index() {
  const user = useSelector((state) => state.users);

  return !user.token ? <Login /> : <Home />;
}

export default Index;
