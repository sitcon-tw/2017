import React, { Component } from 'react'

export default class extends Component {
	render() {
		return (
			<div id="sponsor-page" className={this.props.active ? 'active' : ''}>
				<h2>Sponsor</h2>
			</div>
		)
	}
}
