import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./Assets/CSS/style.css";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Signup from "./Pages/Signup.js";
import EmailVerification from "./Pages/EmailVerification.js";
import Signin from "./Pages/Signin.js";
import Dashboard from "./Pages/Dashboard.js";

// Create a wrapper component to handle the conditional rendering
const AppLayout = () => {
  const location = useLocation();
  const authPages = ["/signup", "/login", "/email-verify"];
  const showNavbarFooter = !authPages.includes(location.pathname);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/email-verify" element={<EmailVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
