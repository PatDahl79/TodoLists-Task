import React from 'react'; 
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { TodoWrapper } from './components/Todo/TodoWrapper';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <TodoWrapper/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
