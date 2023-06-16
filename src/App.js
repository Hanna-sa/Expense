import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Profile from "./Routes/Profile";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Dash from "./Routes/Dash";
import Signup from "./Routes/Signup";
import Admin from "./Routes/Admin";
import OpeningPage from "./Routes/OpeningPage";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OpeningPage/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
