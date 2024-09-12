import Dashboard from "./Pages/Dashboard/Dashboard";
import Welcome from "./Pages/Welcome/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ViewEvents from "./Pages/ViewEvents/ViewEvents";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/signup" exact element={<SignUp/>}></Route>
          <Route path="/dashboard" exact element={<Dashboard/>}></Route>
          <Route path="/viewevents" exact element={<ViewEvents/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
