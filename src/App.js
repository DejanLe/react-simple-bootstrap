import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Jumbotron from './components/Jumbotron';
import Content from './components/Content.js';
import './App.css';

class App extends Component {
 
  render() {
    return ( 
     <div>
       <Navbar />,
       <Jumbotron />, 
       <Content />
     </div> 
    ) 
  }
}

export default App;
