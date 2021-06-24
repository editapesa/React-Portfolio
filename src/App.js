import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
