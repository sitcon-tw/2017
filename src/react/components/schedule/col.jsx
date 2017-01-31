import React, { Component } from 'react'
import { open as fancybox } from 'stores/fancybox.js'

function makeContent(props) {
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

export default function(props) {
	const data = props.data
	const photo = {
		backgroundImage: "url(images/stone-sm.png)",
	}
	const content = makeContent(data)
	return (
		<div className="col" onClick={ () => {fancybox(content)} }>
			<div role="talk-title">{data.title}</div>
			<div role="talk-speaker">
				<div role="photo" style={photo}></div>
				{data.speaker.profile.display_name}
			</div>
			<div role="talk-slide">
				<a href={data.slides}>#簡報連結</a>
			</div>
		</div>
	)
}
