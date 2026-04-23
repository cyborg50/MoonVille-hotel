import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;