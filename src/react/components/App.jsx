import React, { Component } from 'react'
import Cover from './cover/index.jsx'
import Schedule from './schedule/index.jsx'
import Sponsor from './sponsor/index.jsx'
import Transport from './transport/index.jsx'
import Navbar from './navbar/index.jsx'

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<h1>SITCON 2017</h1>
				<Cover id="cover-page" />
				<Schedule id="schedule-page" />
				<Sponsor id="sponsor-page" />
				<Transport id="transport-page" />
				<Navbar />
			</div>
		)
	}
}
