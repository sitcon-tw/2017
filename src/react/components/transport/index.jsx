import React, { Component } from 'react'

export default class extends Component {
	render() {
		return (
			<div id="transport-page" className={this.props.active ? 'active' : ''}>
				<h2>Transport</h2>
			</div>
		)
	}
}
