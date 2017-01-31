import React, { Component } from 'react'
import * as store from 'stores/fancybox.js'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = { content: store.state.content, cls: '' }
	}

	closeHandler() {
		store.close()
	}

	proc0() {
		this.setState({
			content: () => { return (<div></div>) },
			cls: '',
		})
	}

	proc1() {
		this.setState({
			content: store.state.content,
			cls: 'state1',
		})
	}

	proc2() {
		this.setState({
			content: store.state.content,
			cls: 'state2',
		})
	}

	proc3() {
		this.setState({
			content: store.state.content,
			cls: 'state3',
		})
	}

	componentDidMount() {
		store.addStep(() => { this.proc0() }, 20);
		store.addStep(() => { this.proc1() }, 20);
		store.addStep(() => { this.proc2() }, 300);
		store.addStep(() => { this.proc3() }, 300);
	}

	render() {
		const Content = this.state.content
		return (
			<div id="fancybox">
				<div role="fancybox-bg" onClick={this.closeHandler} className={this.state.cls} />
				<div role="fancybox-page" className={this.state.cls}>
					<span role="fancybox-X" onClick={this.closeHandler}>X</span>
					<div role="fancybox-content">
						<Content />
					</div>
				</div>
			</div>
		)
	}
}
