import React from 'react'; 
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactAudioPlayer from 'react-audio-player'; 

export default () =>       
<div className="row">
	<nav className="navbar no-radius navbar-default navbar-static-top">
	  <div className="navbar-inner">
  		  <div className="col-sm-4 col-sm-offset-1">
	      	<Link className="first" to="/">Patrikk Dyrberg Sørensen</Link>
	      	<p>interaction designer | programmer</p>
	      </div>
	      <div className="col-sm-4 col-sm-offset-3 headerlinks">
		      <Link to="/projects">PROJECTS</Link>
		      <Link to="/about">ABOUT</Link>
		      <Link to="/cv">CV</Link>
	      </div>
	  </div>
	</nav>
</div>