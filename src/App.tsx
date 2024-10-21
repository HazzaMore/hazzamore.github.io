import './App.css';
import { Navbar } from './components/common/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Homepage, AboutMe, Portfolio, CV, Contact, Error, Upcoming} from './pages/index';
import {useMenuToggle} from './components/common/useMenuToggle';
import { createContext } from 'react';



interface MenuContextProps {
  menuactive: boolean;
  handleToggle: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  menuactive: false,
  handleToggle: () => {},
});

function App() {

  const { menuactive, handleToggle } = useMenuToggle();

  return (
    <div className="Showcase">
      <MenuContext.Provider value={{menuactive, handleToggle}}>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about-me" element={<AboutMe/>}/>
          <Route path="/my-portfolio" element={<Portfolio />}/>
          <Route path="/cv" element={<CV />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/upcoming" element={<Upcoming />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
