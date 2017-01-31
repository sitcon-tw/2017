import React, { Component } from 'react'
import Timecol from './timecol.jsx'
import Col from './col.jsx'

export default function(props) {
	return (
		<tr>
			<Timecol start={props.start} />
			<td><Col data={props.data["R2"]} /></td>
			<td><Col data={props.data["R0"]} /></td>
			<td><Col data={props.data["R1"]} /></td>
			<td><Col data={props.data["R3"]} /></td>
		</tr>
	)
}
