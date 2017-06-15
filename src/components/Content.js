import React, { Component } from 'react'; 
import nature from '../nature.json'; 
 
class Content extends Component{
 
	render(){
 
		return( 
			 
				 
					<div className="col-md-3">
					<div className="panel">
						<div className="panel panel-header"> 
								<img src={this.props.item.src}
									 alt={this.props.item.title}
									 className="img-responsive"
								 />
						</div>
						<div className="panel panel-body">
							    <h1> {this.props.item.title}</h1> 
								 
								   {this.props.item.description}
								 
					    </div>
					  	</div>
					</div>
			 
			 
			);
	}
}
export default Content;