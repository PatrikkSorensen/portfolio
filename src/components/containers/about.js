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
						<p>A humble programmer with a background in interaction design, who have slowly fallen into the world of programing and experimented with several projects in the fields of: data mining, architetcture, social practices, machine learning and graphics programming.</p>
						<p>Originally educated from Southern University of Denmark, to study Msc. in Games Technology at the IT-University of Copenhagen</p>
						<p>I love everything about playing, toying, cooking, and drumming. And you can probably find me doing one of these things, when im not currently working. I enjoy a relaxed environment, where self-irony, a polite attitude and openness is some of the main ingridients! And i'm always up for a quick board (or video) game each friday. Especially with a beer or two.</p>
						<p><b>I know its important to make a personal text, but maybe some pictures can negate for my sparse description and spread some light on who i am (even though i filter the ugly ones out...).</b></p>
					</div>
				</div>
			</div>
		</Layout>
		);
	}
}

export default AboutPage; 