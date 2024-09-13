import Dashboard from "./Pages/Dashboard/Dashboard";
import Welcome from "./Pages/Welcome/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ViewEvents from "./Pages/Events/ViewEvents";
import MyBookings from "./Pages/Bookings/MyBookings";
import EventList from "./Pages/Events/EventList";
import AddEvent from "./Pages/Events/AddEvent";
import ViewEvent from "./Pages/Events/ViewEvent";


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
          <Route path="/mybookings" exact element={<MyBookings/>}></Route>
          <Route path="/vieweventList" exact element={<EventList/>}></Route>
          <Route path="/addevent" exact element={<AddEvent/>}></Route>
          <Route path="/viewevent" exact element={<ViewEvent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
