import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelfstudyTable extends Component {
	renderRows() {
		return this.props.selfstudy.map((item) => {
			let courses = item.courses.map((course) => {
				return course.name
			}).join(', ') + '.'

			console.log(courses)
			return (
				<tr>
					<td>{item.name}</td>
					<td>{courses}</td>
				</tr>
			)
		})
	}

	render() {
		return (
				<div className="row">
					<div className="col-sm-12">
						<h2>Selfstudy</h2>
						<table className="table table-bordered">
							<tbody>
								<tr>
									<th>Name</th>
									<th>Courses</th>
								</tr>
								{this.renderRows()}
							</tbody>
						</table>
					</div>
				</div>
		)
	}
}

export default connect(null, null)(SelfstudyTable)