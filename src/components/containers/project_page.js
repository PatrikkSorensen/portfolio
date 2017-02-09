import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { fetchProjects, fetchProject, toggleProject } from '../../actions'; 

import Layout from '../layout'; 
import Project from '../project';
import SearchField from '../search_field'; 
import ProjectContainer from './project_container'; 

class ProjectList extends Component {
	componentWillMount() {
		if(this.props.params.id){
			this.props.fetchProject(this.props.params.id); 
		} else {
			this.props.fetchProjects();
		} 
	} 
	componentWillReceiveProps(nextProps) {
		if(!nextProps.params.id && nextProps.projects.length === 1){
			this.props.fetchProjects();
		}
	}
	convertArrayToCSVString(array) {
		if(array === undefined) {
			return; 
		}
		return array.join(', ') + '.'; 
	}
	renderProject(project) {
		let tags = this.convertArrayToCSVString(project.tags); 
		let roles = this.convertArrayToCSVString(project.role); 
		let collaborators = this.convertArrayToCSVString(project.collaborators); 
		let created_with = this.convertArrayToCSVString(project.created_with); 
		return <Project 
					key={project.id} 
					id={project.id} 
					name={project.name} 
					content={project.content} 
					tags={tags}
					role={roles}
					collaborators={collaborators}
					source={project.source}
					year={project.date}
					created_with={created_with}
				/> 
	}
	render() {
		let content; 
		if(!this.props.params.id && this.props.projects.length > 0) {
			content = 	(
			<div>
				<div className="row project-page">
					<div className="col-sm-10">
						<h1>Projects</h1>
					</div>
				</div>
				<ProjectContainer 
					projects={this.props.projects} 
					filters={this.props.filters} 
				/>
			</div>
				); 
		} else {
			content = this.props.projects.map(this.renderProject.bind(this));
		}

		return (
		<Layout>
			<div> 
				{content}
			</div>
		</Layout>
		);
	}
}

function mapStateToProps(state) {
	return { 
		projects : state.projects.projects, 
		filters: state.filters.activeFilters
	}; 
} 

const mapDispatchToProps = {
	fetchProjects,
	fetchProject,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)