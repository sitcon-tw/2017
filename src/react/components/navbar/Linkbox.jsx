import React, { Component } from 'react'

export default class extends Component {
	render() {
		return (
			<li className="linkbox">
				<div className="linkbox-left"></div>
				<div className="linkbox-top"></div>
				<div className="linkbox-front">
					{this.props.children}
				</div>
			</li>
		)
	}
}
