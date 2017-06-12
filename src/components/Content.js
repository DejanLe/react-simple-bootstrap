import React, { Component } from 'react'; 
 



var one = {
  title: "Nature Bird",
  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg",
  description: "Nulla facilisi. Quisque sed leo eu lectus pellentesque interdum nec ultrices lacus. Aenean pretium fermentum tellus a tristique. Nunc ex magna, varius ac tincidunt id, eleifend non nisi. Fusce lobortis lorem at est tristique, et ultrices ligula lobortis. Ut gravida lorem in diam rhoncus tincidunt. Mauris auctor, dui quis scelerisque tincidunt, neque leo imperdiet ligula, quis consequat felis purus non sem."
};
var two = {
   title: "Yummm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam posuere, tincidunt neque sed, mollis odio. Fusce diam purus, consectetur quis leo euismod, pulvinar ornare quam. Quisque accumsan molestie orci, quis egestas diam accumsan mattis. Donec at est facilisis, lacinia massa vitae, aliquet tortor. Ut scelerisque elementum eros, in tristique ex rhoncus vitae. Maecenas porta venenatis euismod. Sed bibendum tempus dolor, eget venenatis erat tincidunt semper. Fusce non mi non dolor euismod pretium eu nec sapien."
};
var three = {
   title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg",
   	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet urna id ligula ullamcorper pellentesque. Integer ex odio, scelerisque a imperdiet et, accumsan id neque. Praesent rhoncus risus blandit bibendum dapibus. Donec convallis ligula elit, vel congue odio imperdiet egestas. Sed blandit auctor erat id finibus. Nam id arcu turpis."
  };
 
class Content extends Component{
 
	render(){
 
		return(
			<div>
			 
			<div className="container">
					<div className="col-md-4">
						<div className="panel panel-body">
								<h1><a href=" ">{one.title}</a></h1>
								<img src={one.src}
									 alt={one.title}
									 className="img-responsive img-thumbnail"
								 />
								 <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#news1">Read</button>
								  <div id="news1" className="collapse">
								   {one.description}
								  </div>
					    </div>
					</div>
					<div className="col-md-4">
						<div className=" panel panel-body">
								<h1>{two.title}</h1>
								<img src={two.src}
									 alt={two.title}
									 className="img-responsive img-thumbnail"
								 />
								 
								   <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#news2">Read</button>
								  <div id="news2" className="collapse">
								   {two.description}
								  </div>
					    </div> 
					 </div>
					<div className="col-md-4">
						<div className="panel panel-body ">
								<h1>{three.title}</h1>
								<img src={three.src}
									 alt={three.title}
									 className="img-responsive img-thumbnail"
								 />
								   <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#news3">Read</button>
								  <div id="news3" className="collapse">
								   {three.description}
								  </div>
					    </div>
					</div>
			 </div>
			</div>
			);
	}
}
export default Content;