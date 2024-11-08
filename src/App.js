import './App.css';
import BodyMass from './Components/BodyMass/BodyMass';
import Exercises from './Components/Exercises/Exercises';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Exercises/>
    <HeroBanner/>
    <BodyMass/>
    <Footer/>
   
    </div>
  );
}

export default App;
