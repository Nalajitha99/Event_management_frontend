import Welcome from "./Pages/Welcome/Welcome";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ViewEvents from "./Pages/Events/ViewEvents";
import MyBookings from "./Pages/Bookings/MyBookings";
import EventList from "./Pages/Events/EventList";
import AddEvent from "./Pages/Events/AddEvent";
import ViewEvent from "./Pages/Events/ViewEvent";
import Home from "./Pages/Dashboard/Home";
import EventDetails from "./Pages/Events/EventDetails";
import Booking from "./Pages/Bookings/Booking";
import Payment from "./Pages/Bookings/Payment";
import UserList from "./Pages/User/UserList";

function App() {

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/signup" exact element={<SignUp/>}></Route>
          <Route path="/home" exact element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route path="/viewevents" exact element={<ProtectedRoute><ViewEvents/></ProtectedRoute>}></Route>
          <Route path="/mybookings" exact element={<ProtectedRoute><MyBookings/></ProtectedRoute>}></Route>
          <Route path="/vieweventList" exact element={<ProtectedRoute><EventList/></ProtectedRoute>}></Route>
          <Route path="/addevent" exact element={<ProtectedRoute><AddEvent/></ProtectedRoute>}></Route>
          <Route path="/viewevent" exact element={<ProtectedRoute><ViewEvent/></ProtectedRoute>}></Route>
          <Route path="/eventDetails" exact element={<ProtectedRoute><EventDetails/></ProtectedRoute>}></Route>
          <Route path="/booking" exact element={<ProtectedRoute><Booking/></ProtectedRoute>}></Route>
          <Route path="/payment" exact element={<ProtectedRoute><Payment/></ProtectedRoute>}></Route>
          <Route path="/userList" exact element={<ProtectedRoute><UserList/></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
