import './App.css';
import Exercises from './Components/Exercises/Exercises';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Exercises/>
    </div>
  );
}

export default App;
