import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <Route exact path="/" component={Welcome} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/services" component={Services} />
      </React.Fragment>
    </Router>
  );
}

export default App;
