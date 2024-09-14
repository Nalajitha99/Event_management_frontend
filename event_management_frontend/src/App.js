import Welcome from "./Pages/Welcome/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ViewEvents from "./Pages/Events/ViewEvents";
import MyBookings from "./Pages/Bookings/MyBookings";
import EventList from "./Pages/Events/EventList";
import AddEvent from "./Pages/Events/AddEvent";
import ViewEvent from "./Pages/Events/ViewEvent";
import Home from "./Pages/Dashboard/Home";
import EventDetails from "./Pages/Events/EventDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/signup" exact element={<SignUp/>}></Route>
          <Route path="/home" exact element={<Home/>}></Route>
          <Route path="/viewevents" exact element={<ViewEvents/>}></Route>
          <Route path="/mybookings" exact element={<MyBookings/>}></Route>
          <Route path="/vieweventList" exact element={<EventList/>}></Route>
          <Route path="/addevent" exact element={<AddEvent/>}></Route>
          <Route path="/viewevent" exact element={<ViewEvent/>}></Route>
          <Route path="/eventDetails" exact element={<EventDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
