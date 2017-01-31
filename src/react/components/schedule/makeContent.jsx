import React, { Component } from 'react'

export default function makeContent(props) {
	const title = props.title
	const abstract = props.abstract
	const photo = props.speaker.profile.avatar
	const slide = props.slides
	const name = props.speaker.profile.display_name
	const bio = props.speaker.profile.bio
	return () => {
		return (
			<div>
				<section>
					<h2>{title}</h2>
					<p>{abstract}</p>
				</section>
				<section>
					<h2>{name}</h2>
					<p>{bio}</p>
				</section>
			</div>
		)
	}
}
