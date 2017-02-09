import React, { Component } from 'react'; 
import Layout from '../layout'; 

class AboutPage extends Component {
	render() {
		return (
		<Layout>
			<div className="about-container">
				<div className="row">
					<div className="col-sm-10">
						<h1>About </h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<p>A humble programmer with a background in interaction design, who have slowly fallen into the world of programing and experimented with several projects in the fields of: data mining, architetcture, social practices, machine learning and graphics programming.</p>
						<p>Having tried multiple languages, frameworks, applied in different domains, i find myself as the kind of guy who is not afraid to go into deep water where i will always prioritize to get testable results 'out on the screen'. Killing your darlings is often part of such a process, and planning with your team members is most certainly helpful.</p>
						<p>I'm also a person who strives to keep on learning as much as possible, in order to reflect on my current programming practices and techniques. This can be anything to a self-paced course, a blog post, or a thread on hackernews i participate in. With the exploding rate of new and refined practices, frameworks, and techniques, i find it paramount to be updated when i plan which tools im going to use in order to solve a given problem.</p>
						<p>As a person, i love everything about playing, toying, cooking, and drumming. And you can probably find me doing one of these things, when im not currently working. I enjoy a relaxed environment, where self-irony, a polite attitude and openness is some of the main ingridients! And i'm always up for a quick board (or video) game each friday. Especially with a beer or two.</p>
					</div>
					<div className="col-lg-4">
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