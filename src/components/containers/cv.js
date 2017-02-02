import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { getCourses } from '../../actions'; 
import Layout from '../layout'; 


class CVPage extends Component {
	componentWillMount() {
		this.props.getCourses(); 
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
				<div className="col-sm-11 col-sm-offset-1">
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
				<li><b>{experience.employee}</b> : {experience.role}   // {experience.startYear} to {endYear}</li>
		);
	}
	render() {
		return (
		<Layout>
			<div className="cv-page">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-1">
						<h2>Work experience: </h2>
						<ul>
							{this.props.workExperience.map(this.renderWorkexperience.bind(this))}
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 col-sm-offset-1">
						<h2>Education: </h2>
					</div>
				</div>
				{this.props.schools.map(this.renderSchools.bind(this))}
				<div className="row">
					<div className="col-sm-4 col-sm-offset-1">
						<h2>Selfstudy: </h2>
					</div>
				</div>
				{this.props.selfstudySchools.map(this.renderSchools.bind(this))}
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
		selfstudySchools: state.cv.selfstudySchools
	}; 
} 

const mapDispatchToProps = {
	getCourses
}

export default connect(mapStateToProps, mapDispatchToProps)(CVPage)