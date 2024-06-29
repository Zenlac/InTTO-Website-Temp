import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Startup from './pages/Startups';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/startup" element={<Startup />}/>
          {/* <Link to="/">Home</Link> for linking */}
        </Routes>
      </div>
    </Router>
    // <div>
    //   <Navbar/>
    //   <Hero/>
    // </div>
  );
}

export default App;
