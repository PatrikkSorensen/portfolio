import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { fetchProjects, toggleProject } from '../actions'; 
import CardProject from './card-project'; 

class FrontPage extends Component {
	componentWillMount() {
			this.props.fetchProjects();
	}

	renderCardProject(project, className) { 
		if(project) {
		    let tags = project.tags.slice(0, 6); 
   			tags = tags.join(', ') + '.'; 

		    let created_with = project.created_with.slice(0, 3); 
			created_with = created_with.join(', ') + '.'; 
			return (
				<span key={project.id} className={className}> 
					<CardProject 
						imgPath={project.cover} 
						name={project.name} 
						tags={tags} 
						onClick={() => this.props.onClick(project.id, 'projects/' + project.id)}
            createdWith={created_with}
					/> 
				</span>
			);
		}
	} 

	renderFirstRow() {
		let projects; 

		if(this.props.projects.length > 0) {
			projects = []; 
			projects[0] = this.renderCardProject(this.props.projects[1], "col-md-4")
			projects[1] = this.renderCardProject(this.props.projects[2], "col-md-4")
			projects[2] = this.renderCardProject(this.props.projects[3], "col-md-4")
		}

		return (
			projects
		)
	}

	render() {
		return (
			<div>
			<div className="welcome-container">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<h1>Portfolio of Patrikk Dyrberg Sørensen</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-sm-offset-2">
						<p>Having taken a bachelor degree in <b>interaction design</b> and a master degree in <b>games technology</b>, i have ventured into the great world of experimental video games, web development, graphics programing and machine learning.</p>
					</div>
				</div>
			</div>
			<div className="showcase-container">
				<div className="row"> 
						<div className="row">
							{this.renderFirstRow()}
						</div>
				</div>
			</div>
			</div>
		);
	}
}

function mapStateToProps(state) { 
	return { 
		projects : state.projects.projects, 
	}
} 

const mapDispatchToProps = {
	fetchProjects,
	onClick: toggleProject
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage)