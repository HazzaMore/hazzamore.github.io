import './App.css';
import { Navbar } from './components/common/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Homepage, AboutMe, Portfolio, CV, Contact, Error, Upcoming} from './pages/index';



function App() {

  return (
    <div className="Showcase">
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
    </div>
  );
}

export default App;
