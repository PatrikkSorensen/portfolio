import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { toggleProject } from '../../actions'; 
import Layout from '../layout'; 


class SkillContainer extends Component {
  renderSkill(skill) {
    if(skill.projects.length == 0) {
        return(
            <tr>
                <td>{skill.name}</td>
                <td>{skill.level}</td>
                <td>no portfolio projects yet</td>
            </tr>
        ); 
    }

    let links = skill.projects.map(function(project) {
        return (<a onClick={() => this.props.onClick(project.id)}>{project.name + ", "}</a>);
    }.bind(this))

    return (
          <tr>
            <td>{skill.name}</td>
            <td>{skill.level}</td>
            <td>{links}</td>
          </tr>
    ); 
  }
  renderSkills(skills) {
    return (
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Language:</th>
            <th>Feeling of the language:</th>
            <th>Portfolio projects using it: </th>
          </tr>
          {this.props.skills.map(this.renderSkill.bind(this))}
        </tbody>
      </table>
    );
  }
  render() {
    return (
        <div className="row">
          <div className="col-sm-12">
            <h2>Skills: </h2>
            {this.renderSkills()}
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = {
  onClick: toggleProject
}

export default connect(null, mapDispatchToProps)(SkillContainer)