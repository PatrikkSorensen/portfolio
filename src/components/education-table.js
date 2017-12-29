import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleProject } from '../actions'

class EducationTable extends Component {
	renderRows() {
		return this.props.educations.map((education) => {
			return (
				<tr>
					<td>{education.school}</td>
					<td>{education.name}</td>
					<td>{education.year}</td>
				</tr>
			)
		})
	}

	render() {
		return (
				<div className="row education-table">
					<div className="col-sm-12">
						<h2>Educations: </h2>
						<table className="table table-bordered">
							<tbody>
								<tr>
									<th>School</th>
									<th>Name</th>
									<th>Period</th>
								</tr>
								{this.renderRows()}
							</tbody>
						</table>
					</div>
				</div>
		)
	}
}

const mapDispatchToProps = {
	onClick: toggleProject
}

export default connect(null, mapDispatchToProps)(EducationTable)