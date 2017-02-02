import React, { Component } from 'react'; 
import Layout from '../layout'; 

class AboutPage extends Component {
	render() {
		return (
		<Layout>
			<div className="about-container">
				<div className="row">
					<div className="col-lg-4 col-sm-offset-2">
						<p>A humble programmer with a background in interaction design, who have slowly fallen into the world of programing and experimented with several projects in the fields of: data mining, architetcture, social practices, machine learning and graphics programming.</p>
						<p>Having tried multiple languages, frameworks, applied in different domains, i find myself as the kind of guy who is not afraid to go into deep water where i will always prioritize to get results 'out on the screen'. Killing your darlings is often part of such a process, and planning with your team members is most certainly helpful.</p>
						<p>I love everything about playing, toying, cooking, and drumming. And you can probably find me doing one of these things, when im not currently working. I enjoy a relaxed environment, where self-irony, a polite attitude and openness is some of the main ingridients! And i'm always up for a quick board (or video) game each friday. Especially with a beer or two.</p>
						<p><b>I know its important to make a personal text, but maybe some pictures can negate for my sparse description and spread some light on who i am (even though i filter the ugly ones out...).</b></p>
					</div>
				</div>
				<div className="row about-img-container">
					<div className="col-lg-2">
						<figure>
							<img  src={"/images/about/2-edited.png"} width="300px" className="center-block" /> 
							<figcaption>Picture 2: This may be me in a new gray light.</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</Layout>
		);
	}
}

export default AboutPage; 