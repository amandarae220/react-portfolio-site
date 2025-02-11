import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './App.css';

//import React from 'react';

import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import ProjectDetail from './Components/ProjectDetail'; // Add new page component
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
*/

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/:projectId' element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
