import React, { Component } from 'react'
import * as pageStore from 'stores/pages.js'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = { active: pageStore.state.page === this.props.href }
	}

	componentDidMount() {
		pageStore.register(() => {this.pageChangeHandler()})
	}

	pageChangeHandler() {
		this.setState({ active: pageStore.state.page === this.props.href })
	}

	handleClick() {
		location.hash = this.props.href
		pageStore.setState({ page: this.props.href })
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.active !== nextState.active
	}

	render() {
		const className = 'linkbox' + (this.state.active ? ' active': '')
		return (
			<div className={className} onClick={() => this.handleClick()}>
				<img role="red-block" src="images/block-red.png" />
				<img role="red-arrow" src="images/arrow.png" />
				<div className="linkbox-front">
					{this.props.children}
				</div>
			</div>
		)
	}
}
