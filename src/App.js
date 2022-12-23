import './App.css';
import Navbar from './Components/Navbar';
import Navmenu from './Components/Navmenu';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Navmenu />
      </div>
      
    </div>
  );
}

export default App;