import React, { Component } from 'react'

export default function(props) {
	const data = props.data
	const photo = {
		backgroundImage: "url(images/stone-sm.png)",
	}
	return (
		<div className="col">
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
