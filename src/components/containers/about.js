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
						<p>Originally educated from Southern University of Denmark, to study Msc. in Games Technology at the IT-University of Copenhagen</p>
						<p>I love everything about playing, toying, cooking, and drumming. And you can probably find me doing one of these things, when im not currently working. I enjoy a relaxed environment, where self-irony, a polite attitude and openness is some of the main ingridients! And i'm always up for a quick board (or video) game each friday. Especially with a beer or two.</p>
						<p><b>I know its important to make a personal text, but maybe some pictures can negate for my sparse description and spread some light on who i am (even though i filter the ugly ones out...).</b></p>
					</div>
				</div>
				<div className="row about-img-container">
					<div className="col-lg-2 col-sm-offset-2">
						<figure>
							<img  src={"/images/about/1-edited.png"} width="300px" className="center-block" /> 
							<figcaption>Picture 1: This may (or may not!) be me getting having some guy laying on top of me.</figcaption>
						</figure>
					</div>
					<div className="col-lg-2">
						<figure>
							<img  src={"/images/about/2-edited.png"} width="300px" className="center-block" /> 
							<figcaption>Picture 2: This may be me in a new gray light.</figcaption>
						</figure>
					</div>
					<div className="col-lg-2">
						<figure>
							<img  src={"/images/about/3-edited.png"} width="300px" className="center-block" /> 
							<figcaption>Picture 3: This may be me on Roskilde trying funny hats.</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</Layout>
		);
	}
}

export default AboutPage; 