import Login from "./Component/Login/Login";
import Registration from "./Component/Register/Registration";
import { Route, Routes } from "react-router-dom";
const App = () => {
  console.log("hello world");
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
    </>
  );
};

export default App;
