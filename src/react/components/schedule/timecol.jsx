import React, { Component } from 'react'

export default function(props) {
	const startHH = props.start.slice(0, 2)
	const startMM = props.start.slice(2, 4)
	let EndTime = (<div/>)
	if( props.end )
		EndTime = (
			<div role="end-time">
				<strong>{props.end.slice(0, 2)}</strong><span>{props.end.slice(2, 4)}</span>
			</div>
		)
	return (
		<td className="time">
			<div role="start-time">
				<strong>{startHH}</strong><span>{startMM}</span>
			</div>
			{EndTime}
		</td>
	)
}
