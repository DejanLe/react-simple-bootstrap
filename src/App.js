import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Jumbotron from './components/Jumbotron';
import Content from './components/Content.js';
import nature from './nature.json';
import './App.css';

class App extends Component {

 renderContents() {
 	let resultsArray = [];
 	nature.nature_news.map((item, i) => {
 		resultsArray.push(<Content item={item} key={i} />)
 	});
 	return resultsArray;
 }

  render() {
    return ( 
     <div>
       <Navbar /> 
       <Jumbotron />  
       {this.renderContents()}
       
     </div> 
    ) 
  }
}

export default App;
