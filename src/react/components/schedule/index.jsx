import React, { Component } from 'react'
import submissions from './submissions.json'
import Tablebody from './tablebody.jsx'

const bucket = {
	"01:10": {},
	"02:10": {},
	"03:10": {},
	"04:40": {},
	"07:10": {},
	"07:20": {},
	"07:30": {},
	"07:50": {},
	"08:40": {},
}
submissions.forEach((data) => {
	const start = data.start.slice(11, 16)
	const room = data.room.slice(0, 2)
	if( !bucket[start] ) {
		console.error('Timetable key', start, 'not found')
		return
	}
	bucket[start][room] = data
})

export default class extends Component {
	render() {
		return (
			<div id="schedule-page" className={this.props.active ? 'active' : ''}>
				<table>
					<Tablebody datas={bucket} />
				</table>
			</div>
		)
	}
}
