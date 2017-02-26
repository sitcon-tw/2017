import React, { Component } from 'react'
import Linkbox from './Linkbox.jsx'

export default class extends Component {
	render() {
		return (
			<nav id="navbar">
				<Linkbox href="#cover-page">
					首頁
				</Linkbox>
				<Linkbox href="#schedule-page">
					議程
				</Linkbox>
				<Linkbox href="#sponsor-page">
					贊助
				</Linkbox>
				<Linkbox href="#staff-page">
					團隊
				</Linkbox>
				<Linkbox href="#transport-page">
					交通
				</Linkbox>
			</nav>
		)
	}
}
