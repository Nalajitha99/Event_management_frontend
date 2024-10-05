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
import Dashboard from "./Pages/Dashboard/Dashboard";
import EmailVerification from "./Pages/SignUp/EmailVerification";

function App() {

  const ProtectedRoute = ({ children,requiredRole  }) => {
    const token = localStorage.getItem('token');
    const role = sessionStorage.getItem('role');
    
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && role !== requiredRole) {
      // If the user doesn't have the required role, redirect them to a different page
      return <Navigate to={role === 'ADMIN' ? '/dashboard' : '/home'} replace />;
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
          <Route path="/verify" exact element={<EmailVerification/>}></Route>

          <Route path="/home" exact element={<ProtectedRoute requiredRole="USER"><Home/></ProtectedRoute>}></Route>
          <Route path="/dashboard" exact element={<ProtectedRoute requiredRole="ADMIN"><Dashboard/></ProtectedRoute>}></Route>

          <Route path="/viewevents" exact element={<ProtectedRoute requiredRole="USER"><ViewEvents/></ProtectedRoute>}></Route>
          <Route path="/mybookings" exact element={<ProtectedRoute requiredRole="USER"><MyBookings/></ProtectedRoute>}></Route>
          <Route path="/vieweventList" exact element={<ProtectedRoute requiredRole="ADMIN"><EventList/></ProtectedRoute>}></Route>
          <Route path="/addevent" exact element={<ProtectedRoute requiredRole="ADMIN"><AddEvent/></ProtectedRoute>}></Route>
          <Route path="/viewevent/:eventId" exact element={<ProtectedRoute requiredRole="ADMIN"><ViewEvent/></ProtectedRoute>}></Route>
          <Route path="/eventDetails/:eventId" exact element={<ProtectedRoute requiredRole="USER"><EventDetails/></ProtectedRoute>}></Route>
          <Route path="/booking" exact element={<ProtectedRoute requiredRole="USER"><Booking/></ProtectedRoute>}></Route>
          <Route path="/payment" exact element={<ProtectedRoute requiredRole="USER"><Payment/></ProtectedRoute>}></Route>
          <Route path="/userList" exact element={<ProtectedRoute requiredRole="ADMIN"><UserList/></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
