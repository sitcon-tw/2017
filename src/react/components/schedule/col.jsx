import React, { Component } from 'react'

export default function(props) {
	const data = props.data
	return (
		<div className="col">
			<div role="talk-title">{data.title}</div>
			<div role="talk-speaker">
				{data.speaker.profile.display_name}
			</div>
			<div role="talk-slide">
				<a href={data.slides}>#簡報連結</a>
			</div>
		</div>
	)
}
