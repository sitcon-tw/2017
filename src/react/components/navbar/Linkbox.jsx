import React, { Component } from 'react'

export default class extends Component {
	render() {
		return (
			<a className="linkbox" href={this.props.href}>
				<div className="linkbox-left"></div>
				<div className="linkbox-top"></div>
				<div className="linkbox-front">
					{this.props.children}
				</div>
			</a>
		)
	}
}
