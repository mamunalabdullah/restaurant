import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Map from './Components/Map/Map';
import WhyUs from './Components/Home/WhyUs/WhyUs';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/map" element={<Map />} />
        <Route path="/whyus" element={<WhyUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
