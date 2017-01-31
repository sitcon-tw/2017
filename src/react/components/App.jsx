import React, { Component } from 'react'
import Cover from './cover/index.jsx'
import Schedule from './schedule/index.jsx'
import Sponsor from './sponsor/index.jsx'
import Transport from './transport/index.jsx'
import Fancybox from './fancybox/index.jsx'
import Navbar from './navbar/index.jsx'
import Background from './background/index.jsx'
import * as pageStore from 'stores/pages.js'

class Viewer extends Component {
	constructor(props) {
		super(props)
		this.state = { page: pageStore.state.page }
	}
	
	componentDidMount() {
		pageStore.register(() => {this.pageChangeHandler()})
	}

	pageChangeHandler() {
		this.setState({ page: pageStore.state.page })
	}

	render() {
		let isCover = (this.state.page === '#cover-page')
		let isShedule = (this.state.page === '#schedule-page')
		let isSponsor = (this.state.page === '#sponsor-page')
		let isTransport = (this.state.page === '#transport-page')
		return (
			<div id="viewer">
				<div className="content-container">
					<Cover active={isCover}/>
					<Schedule active={isShedule} />
					<Sponsor active={isSponsor} />
					<Transport active={isTransport} />
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
				<Fancybox />
			</div>
		)
	}
}
