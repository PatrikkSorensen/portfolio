import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { getCV } from '../../actions'; 
import Layout from '../layout'; 
import SkillContainer from './skill_container'; 

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
		if(experience.endYear == undefined) {
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
		<Layout>
			<div className="row">
				<div className="col-sm-10 cv-title">
					<h1>CV</h1>
				</div>
			</div>

			<div className="cv-page">
				<SkillContainer skills={this.props.skills} />
				<div className="row">
					<div className="col-sm-6">
						<h2>Work experience: </h2>
						<ul>
							{this.props.workExperience.map(this.renderWorkexperience.bind(this))}
						</ul>
						<h2>Education: </h2>
						{this.props.schools.map(this.renderSchools.bind(this))}
					</div>
					<div className="col-sm-6">
						<h2>Selfstudy: </h2>
						{this.props.selfstudySchools.map(this.renderSchools.bind(this))}
					</div>
					
				</div>
			</div>
		</Layout>
		);
	}
}

function mapStateToProps(state) {
	console.log("cv maptstatetoprops", state.cv); 
	return { 
		workExperience : state.cv.workExperience,
		schools : state.cv.schools, 
		selfstudySchools: state.cv.selfstudySchools, 
		skills: state.cv.skills
	}; 
} 

const mapDispatchToProps = {
	getCV
}

export default connect(mapStateToProps, mapDispatchToProps)(CVPage)