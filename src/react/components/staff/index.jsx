import React, { Component } from 'react'
import Staff from './staff.jsx'
import { open as fancybox } from 'stores/fancybox.js'

export default class extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.active !== nextProps.active
	}

	render() {
		return (
			<div id="staff-page" className={this.props.active ? 'active' : ''}>
				<section role="staff">
					<h2>工作夥伴</h2>
					<Staff />
				</section>
			</div>
		)
	}
}
