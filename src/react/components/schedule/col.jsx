import React, { Component } from 'react'

export default class extends Component {
	stopPropagation(e) {
	    e.stopPropagation()
	    e.nativeEvent.stopImmediatePropagation()
	}

	render() {
		const data = this.props.data
		if(data == undefined) {
			return (
				<div className="col">
				</div>
			)
		}
		const photo = {
			backgroundImage: "url("+data.speaker.avatar+")",
		}
		const name = data.speaker.name
		let showSlides = data.slides ? (<div role="talk-slides" onClick={(e) => { e.stopPropagation() }}><a href={data.slides} target="_blank">#簡報連結</a></div>) : ''
		if (data.type === "U")
			return (
				<div className="col">
					<div role="talk-title">{data.subject}</div>
					<div role="talk-speaker" style={{display: name==='' ? 'none' : 'block'}}>
						{name}
					</div>
				</div>
			)
		return (
			<div className="col">
				<div role="talk-title">{data.subject}</div>
				<div role="talk-speaker" style={{display: name==='' ? 'none' : 'block'}}>
					<div role="photo" style={photo}></div>
					{name}
				</div>
				{showSlides}
			</div>
		)
	}
}
