import './App.css';
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
       <NavBar />      
      <About />
      <Projects />
      <Skills />
       {/* <Testimonials /> */}
      <Contact /> 
      
    </main>
  );
}


export default App;
