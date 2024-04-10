
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import MyCar from './components/MyCar';
import Contact from './components/Contact';



function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/car/1" element={<MyCar />} />
      
      
  
      
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
