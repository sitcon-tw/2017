import React, { Component } from 'react'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = { focus: false }
	}

	clickHandler() {
		setTimeout(()=>{ this.setState({focus: false}) }, 3000)
		this.setState({focus: true})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.focus !== nextState.focus
	}

	render() {
		return (
			<a target="blank" style={{opacity: this.state.focus ? 1 : 0.6}}
				onClick={() => { this.clickHandler() }}
				onMouseEnter={() => { this.setState({focus: true}) }}
				onMouseLeave={() => { this.setState({focus: false}) }}>
				{this.state.focus ? '敬請期待' : this.props.children}
			</a>
		)
	}
}
