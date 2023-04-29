import React, { Component, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/home";
import Projects from "./component/Projects"
import Skills from "./component/Skills";

class App extends Component {
 
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
