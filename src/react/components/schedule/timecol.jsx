import React, { Component } from 'react'

export default function(props) {
	const startHH = props.start.slice(0, 2)
	const startMM = props.start.slice(2, 4)
	return (
		<td className="time">
			<div role="start-time">
				<strong>{startHH}</strong><span>{startMM}</span>
			</div>
		</td>
	)
}
