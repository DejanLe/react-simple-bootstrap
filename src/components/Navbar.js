import React, { Component} from 'react';
 

class Navbar extends Component{
	render(){
		return(
			<div>
			  <nav className="navbar navbar-default navbar-fixed-top">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="">Nature News</a>
			        </div>
			        <div id="navbar" className="collapse navbar-collapse">
			          <ul className="nav navbar-nav">
			            <li><a href="">Home</a></li>
			            <li><a href="">About</a></li>
			            <li><a href="">Contact</a></li>
			          </ul>
			        </div> 
			      </div>
			    </nav>
			</div>
			); 
	}

}
export default Navbar;