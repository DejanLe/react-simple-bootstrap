import React, { Component } from 'react'; 
import nature from '../nature.json'; 
 
class Content extends Component{
 
	render(){
 
		return(
			<div>
			 
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="panel panel-body">
								<h1> {this.props.item.title}</h1>
								<img src={this.props.item.src}
									 alt={this.props.item.title}
									 className="img-responsive img-thumbnail"
								 />
								 <button type="button" className="btn btn-success" data-toggle="collapse" data-target="#news">Read</button>
								  <div id="news" className="collapse">
								   {this.props.item.description}
								  </div>
					    </div>
					</div>
				</div>	  
			 </div>

			</div>
			);
	}
}
export default Content;