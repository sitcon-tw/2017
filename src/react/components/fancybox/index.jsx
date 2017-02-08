import React, { Component } from 'react'
import * as store from 'stores/fancybox.js'

class FancyContent extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.updated
	}

	render() {
		return (
			<div role="fancybox-content">
				{this.props.children}
			</div>
		)
	}
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = { content: store.state.content, updated: store.state.updated, cls: '' }
	}

	closeHandler() {
		store.close()
	}

	proc0() {
		this.setState({
			updated: store.state.updated,
			cls: '',
		})
	}

	proc1() {
		this.setState({
			content: store.state.content,
			updated: store.state.updated,
			cls: 'state1',
		})
	}

	proc2() {
		this.setState({
			updated: store.state.updated,
			cls: 'state2',
		})
	}

	proc3() {
		this.setState({
			updated: store.state.updated,
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
					<FancyContent updated={this.state.updated}>
						<Content />
					</FancyContent>
				</div>
			</div>
		)
	}
}
