import React from 'react'; 
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactAudioPlayer from 'react-audio-player'; 

export default () =>       
<nav className="navbar navbar-default navbar-static-top">
	<div className="container">
	    <div className="navbar-inner">
			<div className="row">
				<div className="col-sm-4">
					<Link to="/">Patrikk Dyrberg Sørensen</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
		  	      	<p>interaction designer | programmer</p>
				</div>
				<div style={{float : 'right'}} className="col-sm-4 col-sm-offset-4 headerlinks">
					<Link to="/">HOME</Link>
					<Link activeStyle={{'textDecoration' : 'underline !important'}} to="/projects">PROJECTS</Link>
					<Link activeStyle={{'textDecoration' : 'underline !important'}} to="/about">ABOUT</Link>
					<Link activeStyle={{'textDecoration' : 'underline !important'}} to="/cv">CV</Link>
			    </div>
			</div>
		</div>
   </div>
</nav>