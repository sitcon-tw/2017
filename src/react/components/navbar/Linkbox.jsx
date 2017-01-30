import React, { Component } from 'react'

export default class extends Component {
	render() {
		return (
			<a className="linkbox" href={this.props.href}>
				<img src="images/block-red.png" />
				<div className="linkbox-front">
					{this.props.children}
				</div>
			</a>
		)
	}
}
