import React, { Component } from 'react'
import Linkbox from './Linkbox.jsx'

export default class extends Component {
	render() {
		return (
			<nav id="navbar">
				<Linkbox>
					<a href="#cover-page">首頁</a>
				</Linkbox>
				<Linkbox>
					<a href="#schedule-page">議程</a>
				</Linkbox>
				<Linkbox>
					<a href="#sponsor-page">贊助</a>
				</Linkbox>
				<Linkbox>
					<a href="#transport-page">交通</a>
				</Linkbox>
			</nav>
		)
	}
}
