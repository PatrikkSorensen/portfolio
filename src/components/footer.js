import React from 'react'; 
import { Router, Route, Link } from 'react-router'

export default () =>     
<footer className="">
	<div className="container">
		<div className="col-sm-4">
			    <p>Patrikk Dyrberg Sørensen</p>
			    <p>patri-kk@hotmail.com</p>
		    </div>
	    <div className="col-sm-2 col-sm-offset-6">
		    <a href="https://github.com/PatrikkSorensen"><img className="img-rounded first" src={'images/github-icon.png'}  width="24px" height="24px"/></a>
		    <a href="https://patrikksorensen.itch.io/"><img className="img-rounded" src={'images/itch-icon.png'}  width="24px" height="24px"/></a>
		    <a href="https://dk.linkedin.com/in/patrikk-dyrberg-sørensen-22270635"><img className="img-rounded" src={'images/linkedin-icon.png'}  width="24px" height="24px"/></a>
		</div>
   </div>
</footer>