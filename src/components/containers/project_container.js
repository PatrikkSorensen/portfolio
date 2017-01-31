import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { toggleProject } from '../../actions'; 
import CardProject from '../card_project'; 
import SearchField from '../search_field'; 

function compareStrings(str1, str2) {   
    return str1.toUpperCase() === str2.toUpperCase();
}

function filterProjectsByTags(filters, tags) {

  for(let i = 0; i < filters.length; i++){
      for(let j = 0; j < tags.length; j++) {
        if(compareStrings(filters[i], tags[j])) {
            return true; 
        }
      }
    }

  return false; 
}

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
  }

  filterProjects() {
    let filteredProjects = []; 


    if(this.props.filters.length > 0){
        filteredProjects = this.props.projects.filter(function(project) {
            return filterProjectsByTags(this.props.filters, [project.name]); ;         
        }.bind(this));
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

    for(j = 0; j < cardProjects.length - i - j; j++) {
      console.log("Hello world", cardProjects.length, i ,j); 
      remainders[j] = this.renderCardProject(cardProjects[i + j], "col-sm-4");
    }

    return (
      <div>
        <div className="projects-container">
          {container}
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2" >
              <div className="row">
                {remainders}
              </div>
            </div>
          </div>
        </div>
      </div>); 
  }

    renderThreeProjects(id) {
    let p1, p2, p3; 
    let projects = []; 
    p1 = this.renderCardProject(this.props.projects[id], "col-sm-4");
    p2 = this.renderCardProject(this.props.projects[id + 1], "col-sm-4");
    p3 = this.renderCardProject(this.props.projects[id + 2], "col-sm-4");

    projects = [p1, p2, p3]; 
    return (
      <div className="row" key={"row-" + id}>
        <div className="col-sm-8 col-sm-offset-2" key={"column-" + id}>
          <div className="row" key={"div- " + id}>{ projects } </div>
        </div>
      </div>
    );
  }

  renderCardProject(project, className) {  
    //console.log("render card projects", project); 
    let tags = project.tags.map((tag) => tag + " "); 
    return (
      <span className={className} key ={"span-" + project.id}>
          <CardProject 
            key={"card-project-" + project.id} 
            imgPath={project.cover} 
            name={project.name} tags={tags} 
            onClick={() => this.props.onClick(project.id)} />
      </span>
    );
  }

  render() {
    let projects = this.renderCardProjects(); 
    return(
      <div>
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