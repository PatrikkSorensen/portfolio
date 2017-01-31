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
		console.log("Final contents, ", contents); 
		return (
		<div className="row">
			<div className="col-sm-12">
					<p>{contents}</p>
			</div>
		</div>
		);
	}
	renderImage(src) {
		return (
			<div key={id} className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<figure>
						<img src={"http://localhost:8080/images/" + src } width="400px" /> 
						<figcaption>Fig.1 - A view of the pulpit rock in Norway.</figcaption>
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
				<div className="col-sm-8 col-sm-offset-2">
					<iframe width="420" height="345" src={url}></iframe>
				</div>
			</div>
		)
	}
	renderAudio(clip) {
		return (
	      	<ReactAudioPlayer 
	      		src={clip}
	      		autoPlay 
      		/>
  		);
	}
	render() {
		console.log("project", this.props.content);
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
			}
		}.bind(this));
		let source; 
		if(this.props.source) {
			source = (
					<p>
						<span className="meta-label">Source: </span> 
						{this.props.source}
					</p>);
		}
		return(
			<div>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2 post-container">
						<h4>{this.props.name}</h4>
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
								<span className="meta-label">Tags: </span> 
								<i>{this.props.tags}</i>
							</p>
						</div>
						{contents}
					</div>
				</div>
			</div>
		);
	}
}


export default connect(null, actions)(Project)