import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { toggleProject } from '../actions'
import ReactAudioPlayer from 'react-audio-player'

import ProjectContents from './project-contents'


class Project extends Component {
	componentWillMount() {
		this.props.toggleProject(this.props.match.params.id, this.props.match.params.id)
	} 

	convertArrayToCSVString(array) {
		if(array === undefined) {
			return; 
		}
		return array.join(', ') + '.'; 
	}

	renderParagraphItem(item) {
		let contents = item.map((field) => {
			return (field.text !== undefined ? field.text : <a href={field.link.target}>{field.link.label}</a>)
		})

		return (
			<div className="row">
				<div className="col-sm-10">
						<p>{contents}</p>
				</div>
			</div>
		)
	}

	renderImage(image) {
		return (
			<div className="row">
				<div style={{float: 'none', marginBottom: '20', marginTop: '20'}} className="col-sm-8">
					<figure>
						<img alt={image.src} src={"http://www.dobbeltk.dk/images/" + image.src } width="600px"/> 
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
		let contents = paragraph.map((field) => {
			return (field.text !== undefined ? field.text : <a href={field.link.target}>{field.link.label}</a>)
		})

		return (
		<div className="row">
			<div className="col-sm-12">
				<p className="post-parapgraph">
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
					<iframe title={url} width="420" height="400" src={url}></iframe>
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
			return <div className="col-md-4"><img alt={image} src={"/images/" + image } width="300px"/></div>
		});
		return (
			<div className="row gallery">
				{images}
			</div>
		)
	}

	renderVideoGallery(array) {
		let videos = array.map(function(url) {
			return (
				<div className="col-sm-4">
					<iframe title={url} width="350" height="300" src={url}></iframe>
				</div>
			);
		});

		return (
			<div className="row">
				{videos}
			</div>
		)
	}

	render() {
		let contents = this.props.project.content.map((content) => {
			if(content.paragraph) {
				return this.renderParagraphItem(content.paragraph);  
			} else if(content.img) {
				return this.renderImage(content.img); 
			} else if(content.subtitle) {
				return this.renderSubtitle(content.subtitle); 
			} else if( content.italicText) {
				return this.renderItalicParagraph(content.italicText)
			} else if (content.video) {
				return this.renderVideo(content.video); 
			} else if (content.audio) {
				return this.renderAudio(content.audio);
			} else if (content.gallery) {
				return this.renderGallery(content.gallery); 
			} else if (content.videoGallery) {
				return this.renderVideoGallery(content.videoGallery);
			}

			return null
		})


		let tags = this.convertArrayToCSVString(this.props.project.tags); 
		let roles = this.convertArrayToCSVString(this.props.project.role); 
		let collaborators = this.convertArrayToCSVString(this.props.project.collaborators); 
		let created_with = this.convertArrayToCSVString(this.props.project.created_with); 

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
			<ProjectContents 
				name={this.props.project.name}
				year={this.props.project.year}
				contents={contents}
				role={roles}
				collaborators={collaborators}
				created_with={created_with}
				tags={tags}
				source={source}
			/>
		)
	}
}

function mapStateToProps(state) {
	return { 
		project: state.projects.project,
	}
} 

const mapDispatchToProps = {
	toggleProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)