import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { fetchProjects, toggleProject } from '../../actions'; 
import CardProject from '../card_project'; 
import Layout from '../layout'; 
import Project from '../project'; 

import { Link } from 'react-router';

class FrontPage extends Component {
	componentWillMount() {
			this.props.fetchProjects();
	}
	renderCardProject(project, className) { 
		if(project) {
		return (
			<span className={className}> 
				<CardProject imgPath={project.cover} name={project.name} tags={project.tags} onClick={() => this.props.onClick(project.id)}/> 
			</span>
		);
	}
	} 
	renderFirstRow() {
		let projects; 

		if(this.props.projects.length > 0) {
			projects = []; 
			projects[0] = this.renderCardProject(this.props.projects[4], "col-md-4")
			projects[1] = this.renderCardProject(this.props.projects[5], "col-md-4")
			projects[2] = this.renderCardProject(this.props.projects[6], "col-md-4")
		}

		return (
			projects
		);
	}
	render() {
		return (
		<Layout>

			<div className="welcome-container">
				<div className="row">
						<div className="col-lg-2 col-lg-offset-5">
							<h1 style={{textAlign: "center"}}>Hello,</h1>
						</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-lg-offset-3">
						<p>Having taken a bachelor degree in <b>interaction design</b> and a master degree in <b>games technology</b>, i have ventured into the great world of experimental video games, web development, graphics programing and machine learning.</p>
					</div>
				</div>
			</div>
			<div className="showcase-container">
				<div className="row"> 
					{this.renderFirstRow()}
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Link to="/projects"><p><i>more projects here...</i></p></Link>
					</div>
				</div>
			</div>
		</Layout>
		);
	}
}

function mapStateToProps(state) {
	//console.log("front page maptstatetoprops", state); 
	return { 
		projects : state.projects.projects, 
	}; 
} 

const mapDispatchToProps = {
	fetchProjects,
	onClick: toggleProject
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage)