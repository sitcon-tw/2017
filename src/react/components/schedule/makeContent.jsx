import React, { Component } from 'react'

export default function makeContent(props) {
	const title = props.title
	const abstract = props.abstract
	const photo = { backgroundImage: "url(images/stone-sm.png)" }
	const slide = props.slides
	const name = props.speaker.profile.display_name
	const bio = props.speaker.profile.bio
	return () => {
		return (
			<div>
				<section>
					<div role="photo" style={photo}></div>
					<h2>{name}</h2>
					<p>{bio}</p>
				</section>
				<section>
					<h2>{title}</h2>
					<p>{abstract}</p>
					<a href={slide} target="blank">{slide}</a>
				</section>
			</div>
		)
	}
}
