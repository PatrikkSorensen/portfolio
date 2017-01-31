import React, { Component } from 'react';
import Header from './header'; 
import Footer from './footer'; 

export default class Layout extends Component {
  render() {
    return (
    	<div>
	  		<div>
	      		<Header/>
	  		</div>
	  		<div>
	        	{this.props.children}
	    	</div>
	    	<div>
	        	<Footer />
	        </div>
      </div>
    );
  }
}
