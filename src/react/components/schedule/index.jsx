import React, { Component } from 'react'
import datas from './submissions.json'
import Tablebody from './tablebody.jsx'

export default class extends Component {
	render() {
		return (
			<div id="schedule-page" className={this.props.active ? 'active' : ''}>
				<table>
					<Tablebody datas={datas} />
				</table>
			</div>
		)
	}
}
