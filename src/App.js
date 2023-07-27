import './App.css';
import About from './components/About';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div>
     <Navbar/>
      <div className="mt-20">
          <Home/>
          <About/>
          <Services/>
          <Portfolio/>
          <Team/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;
