import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <div className="App">

      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      
      </Routes>
      
    
    </div>
  );
}

export default App;
