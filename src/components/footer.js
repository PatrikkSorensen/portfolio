import React from 'react'; 
import { Router, Route, Link } from 'react-router'

export default () =>       
<div className="row">
	<footer className="col-md-12 navbar-default">
		<div className="row"> 
      <div className="col-md-8 col-md-offset-3"> 
        <p>Patrikk Dyrberg Sørensen | <b>patri-kk@hotmail.com</b>  | </p>
	      <img className="img-rounded first" src={'images/github-icon.png'}  width="24px" height="24px"/>
	      <img className="img-rounded" src={'images/itch-icon.png'}  width="24px" height="24px"/>
	      <img className="img-rounded" src={'images/linkedin-icon.png'}  width="24px" height="24px"/>
      </div>
      </div>
    </footer>
</div>

/*<div className="row test">
  <div className="test col-sm-9">
    Level 1: .col-sm-9
    <div className="row">
      <div className="col-xs-8 col-sm-6">
        Level 2: .col-xs-8 .col-sm-6
      </div>
      <div className="col-xs-4 col-sm-6">
        Level 2: .col-xs-4 .col-sm-6
      </div>
    </div>
  </div>
</div>*/