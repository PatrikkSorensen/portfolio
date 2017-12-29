import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleProject } from '../actions'

class WorkTable extends Component {
	renderRows() {
		return this.props.work.map((work) => {
			return (
				<tr>
					<td>{work.employee}</td>
					<td>{work.startYear} - {work.endYear ? work.endYear : 'present'}</td>
					<td>{work.role}</td>
					<td>{work.description}</td>
				</tr>
			)
		})
	}

	render() {
		return (
				<div className="row work-table">
					<div className="col-sm-12">
						<h2>Work: </h2>
						<table className="table table-bordered">
							<tbody>
								<tr>
									<th>Company</th>
									<th>Period</th>
									<th>Role</th>
									<th>Description</th>
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

export default connect(null, mapDispatchToProps)(WorkTable)