import React, { Component } from 'react'

export default function makeContent(props) {
	if(props == undefined) return
	const subject = props.subject
	const summary = props.summary
	const photo = { backgroundImage: "url(images/stone-sm.png)" }
	const slide = props.slides
	const name = props.speaker.name
	const bio = props.speaker.bio
	return () => {
		return (
			<div>
				<section>
					<div role="photo" style={photo}></div>
					<h2>{name}</h2>
					<p>{bio}</p>
				</section>
				<section>
					<h2>{subject}</h2>
					<p>{summary}</p>
					<p></p>
				</section>
			</div>
		)
	}
}
