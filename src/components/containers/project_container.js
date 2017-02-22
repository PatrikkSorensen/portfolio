import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { toggleProject } from '../../actions'; 
import CardProject from '../card_project'; 
import SearchField from '../search_field'; 

function compareStrings(str1, str2) {   
    if(str1 == undefined || str2 == undefined){
      return true; 
    }

    return str1.toUpperCase() === str2.toUpperCase();
}

function filterProjectsByTags(filters, tags) {

  for(let i = 0; i < filters.length; i++){
      for(let j = 0; j < tags.length; j++) {
        if(compareStrings(filters[i], tags[j])){
          return true;
        }
      }
    }

  return false; 
}

function filterProjectsByNames(filters, name) {
  for(let i = 0; i < filters.length; i++){
      if(filters[i] == name) {
        return true; 
      }
  }
}

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
  }

  filterProjects() {
    let filteredProjects = []; 
    let arr1 = []; 
    let arr2 = []; 

    if(this.props.filters.length > 0){
        arr1 = this.props.projects.filter(function(project) {
            return  filterProjectsByTags(this.props.filters, project.tags);         
        }.bind(this));

        arr2 = this.props.projects.filter(function(project) {
            return  filterProjectsByNames(this.props.filters, project.name);         
        }.bind(this));
        
        filteredProjects = arr1.concat(arr2); 
    } else {
      filteredProjects = [...this.props.projects]; 
    }

    return filteredProjects
  }

  renderCardProjects() {
    if(this.props.projects.length < 1) {
        return; 
    } 

    let container = []; let remainders = []; 
    let cardProjects = this.filterProjects(); 
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
      ); 
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
      return; 
    }
    let created_with = project.created_with.slice(0, 3); 
    created_with = created_with.join(', ') + '.'; 
    
    let tags = project.tags.slice(0, 6); 
    tags = tags.join(', ') + '.'; 
    return (
      <span className={className} key ={"span-" + project.id}>
          <CardProject 
            key={"card-project-" + project.id} 
            imgPath={project.cover} 
            name={project.name} tags={tags} 
            onClick={() => this.props.onClick(project.id)} 
            createdWith={created_with}
          />
      </span>
    );
  }

  render() {
    let projects = this.renderCardProjects(); 
    return(
      <div>
          <div className="row project-page">
            <div className="col-sm-10">
              <h1>Projects</h1>
            </div>
          </div>
          <SearchField />
          {projects}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onClick: toggleProject
}

export default connect(null, mapDispatchToProps)(ProjectContainer)