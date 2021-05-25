import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Services from './pages/Services';
import About from './pages/About';

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <Route exact path="/" component={Welcome} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </React.Fragment>
    </Router>
  );
}

export default App;
