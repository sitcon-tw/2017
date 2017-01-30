import React, { Component } from 'react'
import Cover from './cover/index.jsx'
import Schedule from './schedule/index.jsx'
import Sponsor from './sponsor/index.jsx'
import Transport from './transport/index.jsx'
import Navbar from './navbar/index.jsx'
import Background from './background/index.jsx'

class Viewer extends Component {
	render() {
		return (
			<div id="viewer">
				<div className="content-container">
					<Cover />
					<Schedule />
					<Sponsor />
					<Transport />
				</div>
				<div className="side-decorator"></div>
			</div>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Viewer />
				<Navbar />
				<Background />
			</div>
		)
	}
}
