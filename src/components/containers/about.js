import React, { Component } from 'react'; 
import Layout from '../layout'; 

class AboutPage extends Component {
	render() {
		return (
		<Layout>
			<div className="about-container">
				<div className="row">
					<div className="col-lg-3 col-lg-offset-2">
						<img className="img-responsive" src={"/images/self-portrait.jpg"} width="200px" height="200px" />
					</div>
					<div className="col-lg-4">
						<p>I am an interaction designer and programmer, who have been experimenting with several projects in the fields of: data mining, architetcture, social practices, machine learning and graphics programming.</p>
						<p>Originally educated from Southern University of Denmark, i moved to Copenhagen with my better half, to study Msc. in Games Technology at the IT-University of Copenhagen</p>
						<p>If you are interested in any of my projects, feel free to check out the source on my github or write me an email about them. </p>
					</div>
				</div>
			</div>
		</Layout>
		);
	}
}

export default AboutPage; 