import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Home, About, Contact, Beginner, Tech, Business, Map} from './pages';
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/beginner" element={<Beginner />} />
        <Route path="programs/tech" element={<Tech />} />
        <Route path="/programs/business" element={<Business />} />
        <Route path="/programs/map" element={<Map />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;