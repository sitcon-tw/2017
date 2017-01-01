import React, { Component } from 'react'
import Cover from './cover/index.jsx'
import Schedule from './schedule/index.jsx'
import Sponsor from './sponsor/index.jsx'
import Transport from './transport/index.jsx'
import Navbar from './navbar/index.jsx'
import Background from './background/index.jsx'

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Cover />
				<Schedule />
				<Sponsor />
				<Transport />
				<Navbar />
				<Background />
			</div>
		)
	}
}
