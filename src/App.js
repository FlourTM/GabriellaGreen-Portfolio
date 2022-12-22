import './App.css';
import Menu from './Components/SVGs/Menu.tsx';
import Hexagon from './Components/SVGs/Hexagon.tsx';
import Logo from './Components/SVGs/Logo.tsx';
import Modes from './Components/SVGs/Modes.tsx';
import Socials from './Components/SVGs/Socials.tsx';

function App() {
  return (
    <div className="App bg-slate-400">
      <Socials  />
      <Modes />
      <Logo className='fill-slate-700 stroke-slate-700'/>
      <Menu className='fill-slate-700'/>
      <Hexagon className='stroke-slate-700' />
      
    </div>
  );
}

export default App;
