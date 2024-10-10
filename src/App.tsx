import './App.css';
import { Navbar } from './components/common/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Homepage, AboutMe, Portfolio, CV, Contact, Error} from './pages/index';
import {useMenuToggle, getScrollbarWidth} from './components/common/useMenuToggle';
import { createContext } from 'react';



interface MenuContextProps {
  menuActive: boolean;
  handleToggle: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  menuActive: false,
  handleToggle: () => {},
});

function App() {

  const { menuActive, handleToggle } = useMenuToggle();

  return (
    <div className="Showcase">
      <MenuContext.Provider value={{menuActive, handleToggle}}>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about-me" element={<AboutMe/>}/>
          <Route path="/my-portfolio" element={<Portfolio />}/>
          <Route path="/cv" element={<CV />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
