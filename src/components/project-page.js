import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { fetchProjects, toggleProject } from '../actions'; 

import CardProject from './card-project'

class ProjectPage extends Component {
	componentWillMount() {
		this.props.fetchProjects();
	} 

  renderCardProjects() {
    let container = []; 
    let remainders = []; 
    let cardProjects = [...this.props.projects]
    let i; let j; 

    for(i = 0; i < cardProjects.length && cardProjects.length - i >= 3; i += 3 ){
      container[i] = this.renderThreeProjects(i); 
    }

    for(j = 0; j <= cardProjects.length - i; j++) {
      remainders[j] = this.renderCardProject(cardProjects[i + j], "col-sm-4");
    }

    return (
      <div className="projects-container">
        {container}
        <div className="row">
          <div className="col-sm-12" >
            <div className="row">
              {remainders}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderThreeProjects(id) {
    let p1, p2, p3; 
    let projects = []; 
    p1 = this.renderCardProject(this.props.projects[id], "col-sm-4");
    p2 = this.renderCardProject(this.props.projects[id + 1], "col-sm-4");
    p3 = this.renderCardProject(this.props.projects[id + 2], "col-sm-4");

    projects = [p1, p2, p3]; 
    return (
      <div className="row card-row" key={"div- " + id}>{ projects } </div>
    );
  }

  renderCardProject(project, className) {  
    if(project === undefined) {
      return
    }

    let created_with = project.created_with.slice(0, 3)
    created_with = created_with.join(', ') + '.'
    
    let tags = project.tags.slice(0, 6)
    tags = tags.join(', ') + '.'

    return (
      <span className={className} key ={"span-" + project.id}>
          <CardProject 
            key={"card-project-" + project.id} 
            imgPath={project.cover} 
            name={project.name} tags={tags} 
            onClick={() => this.props.onClick(project.id, 'projects/' + project.id)} 
            createdWith={created_with}
          />
      </span>
    )
  }

  render() {
    return(
      <div>
          <div className="row project-page">
            <div className="col-sm-10">
              <h1>Projects</h1>
            </div>
          </div>
          {this.renderCardProjects()}
      </div>
    )
  }
}

function mapStateToProps(state) {
	return { 
		projects : state.projects.projects, 
	}
} 

const mapDispatchToProps = {
  onClick: toggleProject,
	fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)