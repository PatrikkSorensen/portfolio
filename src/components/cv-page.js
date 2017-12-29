import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { getCV } from '../actions' 

import SkillTable from './skill-table' 
import WorkTable from './work-table' 
import EducationTable from './education-table' 
import SelfstudyTable from './selfstudy-table' 

class CVPage extends Component {
	componentWillMount() {
		this.props.getCV(); 
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
					<WorkTable work={this.props.work} />
					<EducationTable educations={this.props.educations} />
					<SelfstudyTable selfstudy={this.props.selfstudy} />
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