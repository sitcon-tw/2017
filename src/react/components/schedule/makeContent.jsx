import React, { Component } from 'react'

export default function makeContent(props) {
	if(props == undefined) return
	const subject = props.subject
	const summary = props.summary
	const photo = { backgroundImage: "url("+props.speaker.avatar+")" }
	const slide = props.slides
	const name = props.speaker.name
	const bio = props.speaker.bio

	return () => {
		return (
			<div>
				<section style={{display: name==='' ? 'none' : 'block'}}>
					<div role="photo" style={photo}></div>
					<h2>{name}</h2>
					{bio.split('\n').map((paragraph, idx) => {
						return <p key={idx}>{paragraph}</p>
					})}
				</section>
				<section>
					<h2>{subject}</h2>
					{summary.split('\n').map((paragraph, idx) => {
						return <p key={idx}>{paragraph}</p>
					})}
					<p></p>
				</section>
			</div>
		)
	}
}
