import React, { Component } from 'react'
import Timecol from './timecol.jsx'
import Col from './col.jsx'
import { open as fancybox } from 'stores/fancybox.js'
import makeContent from './makeContent.jsx'

export default function(props) {
	const contentR0 = makeContent(props.data["R0"])
	const contentR1 = makeContent(props.data["R1"])
	const contentR2 = makeContent(props.data["R2"])
	const contentR3 = makeContent(props.data["R3"])

	let R2 = null
	if( props.data["R2"] && props.data["R2"].subject === "校園資訊系統的困境與嘗試改善" )
		R2 = (
			<td onClick={() => { fancybox(contentR2) }} className="clickable" rowSpan={3}>
				<Col data={props.data["R2"]} />
			</td>
		)
	else if( props.data["R2"] )
		R2 = (
			<td onClick={() => { fancybox(contentR2) }} className="clickable">
				<Col data={props.data["R2"]} />
			</td>
		)

	return (
		<tr>
			<Timecol start={props.start} />
			{R2}
			<td onClick={() => { fancybox(contentR0) }} className="clickable">
				<Col data={props.data["R0"]} />
			</td>
			<td onClick={() => { fancybox(contentR1) }} className="clickable">
				<Col data={props.data["R1"]} />
			</td>
			<td onClick={() => { fancybox(contentR3) }} className="clickable">
				<Col data={props.data["R3"]} />
			</td>
		</tr>
	)
}
