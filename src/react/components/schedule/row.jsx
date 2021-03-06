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
	const contentS = makeContent(props.data["S"])

	const timeHasS = ['1110', '1130', '1440', '1500', '1600', '1620', '1650', '1710']
	const timeHasConf = ['1110', '1140', '1440', '1455', '1510', '1600', '1650']
	const SRowSpan = ['1440', '1500'].indexOf(props.start) >= 0 ? 3 : 1

	if (timeHasConf.indexOf(props.start) >= 0 && timeHasS.indexOf(props.start) >= 0) {
		return (
			<tr>
				<Timecol start={props.start} />
				<td rowSpan="2" onClick={() => { fancybox(contentR2) }} className="clickable">
					<Col data={props.data["R2"]} />
				</td>
				<td rowSpan="2" onClick={() => { fancybox(contentR0) }} className="clickable">
					<Col data={props.data["R0"]} />
				</td>
				<td rowSpan="2" onClick={() => { fancybox(contentR1) }} className="clickable">
					<Col data={props.data["R1"]} />
				</td>
				<td rowSpan="2" onClick={() => { fancybox(contentR3) }} className="clickable">
					<Col data={props.data["R3"]} />
				</td>
				<td rowSpan={ SRowSpan } onClick={() => { fancybox(contentS) }} className="clickable" role="unconf">
					<Col data={props.data["S"]} />
				</td>
			</tr>
		)
	} else if (timeHasConf.indexOf(props.start) >= 0 && timeHasS.indexOf(props.start) === -1) {
		return (
			<tr>
				<Timecol start={props.start} />
				<td rowSpan="2" onClick={() => { fancybox(contentR2) }} className="clickable">
					<Col data={props.data["R2"]} />
				</td>
				<td rowSpan="2" onClick={() => { fancybox(contentR0) }} className="clickable">
					<Col data={props.data["R0"]} />
				</td>
				<td rowSpan="2" onClick={() => { fancybox(contentR1) }} className="clickable">
					<Col data={props.data["R1"]} />
				</td>
				<td rowSpan="2" onClick={() => { fancybox(contentR3) }} className="clickable">
					<Col data={props.data["R3"]} />
				</td>
			</tr>
		)
	} else if(timeHasS.indexOf(props.start) >= 0 && timeHasConf.indexOf(props.start) === -1) {
		return (
			<tr>
				<Timecol start={props.start} />
				<td rowSpan={ SRowSpan } onClick={() => { fancybox(contentS) }} className="clickable" role="unconf">
					<Col data={props.data["S"]} />
				</td>
			</tr>
		)
	}
}
