import React, { Component } from 'react'
import Timecol from './timecol.jsx'

export default function(props) {
	return (
		<tr>
			<Timecol start={props.start} />
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>4</td>
		</tr>
	)
}
