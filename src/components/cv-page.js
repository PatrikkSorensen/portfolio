import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { getCV } from '../actions' 

import SkillTable from './skill-table' 
// import WorkTable from './work-table' 
// import SelfstudyTable from './selfstudy-table' 
// import EducationTable from './education-table' 

class CVPage extends Component {
	componentWillMount() {
		this.props.getCV(); 
	}
	renderCourse(course) {
		if(course.ects) {
			return <li>{course.name} </li>
		} else { 
			return <li>{course.name} </li>
		}
	}

	renderSchools(school) {
		let title; 
		if(school.year) {
			title = '/ ' + school.year; 
		}
		return (
			<div key={school.id} className="row">
				<div className="col-sm-11">
					<h6><b>{school.name} {title}</b></h6>
					<ul className="courses-container">
						{school.courses.map(this.renderCourse)}
					</ul>
				</div>
			</div>
		);
	}
	renderWorkexperience(experience) {
		let endYear; 
		if(experience.endYear === undefined) {
			endYear = 'present'; 
		} else {
			endYear = experience.endYear; 
		}

		return (
				<li>{experience.employee} : {experience.role}   |  {experience.startYear} to {endYear}</li>
		);
	}
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-sm-10 cv-title">
						<h1>CV</h1>
					</div>
				</div>
				<div className="cv-page">
					<SkillTable skills={this.props.skills} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		work : state.cv.work,
		educations : state.cv.educations, 
		selfstudy: state.cv.selfstudy, 
		skills: state.cv.skills
	}
} 

const mapDispatchToProps = {
	getCV
}

export default connect(mapStateToProps, mapDispatchToProps)(CVPage)