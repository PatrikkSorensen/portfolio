import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import * as actions from '../actions'; 
import ReactAudioPlayer from 'react-audio-player'; 

let id = 0; 

class Project extends Component {
	renderParagraph(paragraph) {
		let contents = paragraph.map(function(field) {
			if(field.text != undefined) {
				id++; 
				return field.text
			} else if(field.link != undefined) {
				return <a href={field.link.target}>{field.link.label}</a>
			}
		});

		return (
		<div className="row">
			<div className="col-sm-10">
					<p>{contents}</p>
			</div>
		</div>
		);
	}
	renderImage(image) {
		return (
			<div key={id} className="row">
				<div style={{float: 'none', marginBottom: '20', marginTop: '20'}} className="col-sm-8">
					<figure>
						<img src={"http://www.dobbeltk.dk/images/" + image.src } width="600px"/> 
						<figcaption>{image.text}</figcaption>
					</figure>
				</div>
			</div>
		); 
	}
	renderSubtitle(title) {
		return <h4>{title}</h4>
	}
	renderItalicParagraph(paragraph) {
		let contents = paragraph.map(function(field) {
			if(field.text != undefined) {
				id++; 
				return field.text
			} else if(field.link != undefined) {
				return <a href={field.link.target}>{field.link.label}</a>
			}
		});
		return (
		<div className="row">
			<div className="col-sm-12">
				<p className="post-parapgraph" key={id}>
					<b><i>{contents}</i></b>
				</p>
			</div>
		</div>
		);
	}
	renderVideo(url) {
		return (
			<div className="row">
				<div className="col-sm-12">
					<iframe width="420" height="400" src={url}></iframe>
				</div>
			</div>
		)
	}
	renderAudio(clip) {
		return (
	      	<ReactAudioPlayer className="center-block"
	      		src={clip}
	      		autoPlay 
      		/>
  		);
	}
	renderGallery(array) {
		let images = array.map(function(image) {
			return <div className="col-md-4"><img src={"http://www.dobbeltk.dk/images/" + image } width="300px"/></div>
		});
		return (
			<div className="row">
				{images}
			</div>
		)
	}
	renderVideoGallery(array) {
		let videos = array.map(function(url) {
			return (
				<div className="col-sm-4">
					<iframe width="350" height="300" src={url}></iframe>
				</div>
			);
		});

		return (
			<div className="row">
				{videos}
			</div>
		);
	}
	render() {
		let contents = this.props.content.map(function(content) {
			id += 1; 
			if(content.paragraph != undefined) {
				return this.renderParagraph(content.paragraph);  
			} else if(content.img != undefined) {
				return this.renderImage(content.img); 
			} else if(content.subtitle != undefined) {
				return this.renderSubtitle(content.subtitle); 
			} else if( content.italicText) {
				return this.renderItalicParagraph(content.italicText)
			} else if (content.video != undefined) {
				return this.renderVideo(content.video); 
			} else if (content.audio) {
				return this.renderAudio(content.audio);
			} else if (content.gallery) {
				return this.renderGallery(content.gallery); 
			} else if (content.videoGallery) {
				return this.renderVideoGallery(content.videoGallery);
			}
		}.bind(this));

		let source; 
		if(this.props.source) {
			source = (
				<p>
					<span className="meta-label">Source: </span> 
					{this.props.source}
				</p>
			);
		}
		return(
			<div>
				<div className="row">
					<div className="col-sm-10 post-container">
						<h1>{this.props.name}</h1>
						<span className="glyphicon glyphicon-time">Finished on {this.props.year}</span>
						<div className="project-meta-info">
							<p>
								<span className="meta-label">Role: </span> 
								{this.props.role}
							</p>
							<p>
								<span className="meta-label">Collaborators: </span> 
								{this.props.collaborators}
							</p>
							{source}
							<p>
								<span className="meta-label">Made with: </span> 
								{this.props.created_with}
							</p>
						</div>
						{contents}
					</div>
					<div className="row">
						<div style={{marginTop: '48px'}} className="col-sm-10 post-container">
							<p>
								<span className="meta-label">Tags: </span> 
								<i>{this.props.tags}</i>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default connect(null, actions)(Project)