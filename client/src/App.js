import Login from "./Component/Login/Login";
import Registration from "./Component/Register/Registration";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./Component/UserProfile/UserProfile";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const isLoggedIn = useAuth();
  console.log(isLoggedIn);
  console.log("hello world");
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
      </Routes>
    </>
  );
};

export default App;
