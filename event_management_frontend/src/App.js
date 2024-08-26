import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import AdminLogin from "./Pages/Admin/LogIn/AdminLogin";


function App() {
  return (
    <div className="App">
      <NavBar userType='admin'/>
      <Footer/>
    </div>
  );
}

export default App;
