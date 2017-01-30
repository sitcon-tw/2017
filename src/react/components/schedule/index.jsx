import React, { Component } from 'react'

export default class extends Component {
	render() {
		return (
			<div id="schedule-page" className={this.props.active ? 'active' : ''}>
				<h2>Schedule</h2>
			</div>
		)
	}
}
