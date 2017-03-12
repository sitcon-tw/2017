import React, { Component } from 'react'
import submissions from '../../../../assets/submissions.json'
import SpecialEvents from './specialEvents.jsx'
import NightEvents from './nightEvents.jsx'
import Tablebody from './tablebody.jsx'

const bucket = {
	"09:10": {},
	"10:10": {},
	"11:10": {},
	"11:30": {},
	"12:50": {},
	"14:40": {},
	"14:55": {},
	"15:00": {},
	"15:10": {},
	"16:00": {},
	"16:20": {},
	"16:50": {},
	"17:10": {},
	"18:20": {},
	"18:35": {},
}
submissions.forEach((data) => {
	const start = data.start.slice(11, 16)
	const room = data.room.replace(/[^a-zA-Z0-9]/, '')
	if( !bucket[start] ) {
		console.error('Timetable key', start, 'not found')
		return
	}
	bucket[start][room] = data
})

export default class extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.active !== nextProps.active
	}

	render() {
		return (
			<div id="schedule-page" className={this.props.active ? 'active' : ''}>
				<h2>日間活動</h2>
				<SpecialEvents />
				<h2>晚間活動</h2>
				<NightEvents />
				<h2>議程</h2>
				<table>
					<Tablebody datas={bucket} />
				</table>
			</div>
		)
	}
}
