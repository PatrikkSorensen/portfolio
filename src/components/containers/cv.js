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
					<h6>{school.name} {title}</h6>
					<ul className="courses-container">
						{school.courses.map(this.renderCourse)}
					</ul>
				</div>
			</div>
		);
	}
	render() {
		return (
		<Layout>
			<div className="cv-page">
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
	//console.log("cv maptstatetoprops", state.cv); 
	return { 
		schools : state.cv.schools, 
		selfstudySchools: state.cv.selfstudySchools
	}; 
} 

const mapDispatchToProps = {
	getCourses
}

export default connect(mapStateToProps, mapDispatchToProps)(CVPage)