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
	convertArrayToCSVString(array, delimter) {
		return array.join(', ') + '.'; 
	}
	renderProject(project) {
		let tags = this.convertArrayToCSVString(project.tags, ', '); 
		let roles = this.convertArrayToCSVString(project.role, ', '); 

		return <Project 
					key={project.id} 
					id={project.id} 
					name={project.name} 
					content={project.content} 
					tags={tags}
					role={roles}
					collaborators={project.collaborators}
					source={project.source}
					year={project.date}
				/> 
	}
	render() {
		let content; 
		if(!this.props.params.id && this.props.projects.length > 0) {
			content = <ProjectContainer 
				projects={this.props.projects} 
				filters={this.props.filters} />; 
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
	//console.log("Projects page: MapStateToProps", state.projects); 
	return { 
		projects : state.projects.projects, 
		filters: state.filters.activeFilters
	}; 
} 

const mapDispatchToProps = {
	fetchProjects,
	fetchProject,
	onClick: toggleProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)