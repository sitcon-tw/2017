import React, { Component } from 'react'
import Row from './row.jsx'
import Timecol from './timecol.jsx'

export default function(props) {
	const datas = props.datas
	console.log(datas)
	return (
		<tbody>
			<tr>
				<th></th>
				<th>
					R2
					<div>
						<a>共筆</a>
						<a>直播</a>
					</div>
				</th>
				<th>
					R0
					<div>
						<a>共筆</a>
						<a>直播</a>
					</div>
				</th>
				<th>
					R1
					<div>
						<a>共筆</a>
						<a>直播</a>
					</div>
				</th>
				<th>
					R3
					<div>
						<a>共筆</a>
					</div>
				</th>
			</tr>
			<tr>
				<Timecol start="0830" />
				<td colSpan="4">入場時間</td>
			</tr>
			<tr>
				<Timecol start="0900" />
				<td colSpan="4">開幕</td>
			</tr>
			<tr>
				<Timecol start="0910" />
				<td colSpan="4">Keynote 1</td>
			</tr>
			<tr>
				<Timecol start="0900" />
				<td colSpan="4">Keynote 2</td>
			</tr>
			<Row start="1110" />
			<tr>
				<Timecol start="1240" />
				<td colSpan="4">Talk</td>
			</tr>
			<tr>
				<Timecol start="1410" />
				<td colSpan="4">交流</td>
			</tr>
			<tr>
				<Timecol start="1450" />
				<td colSpan="4">點心</td>
			</tr>
			<Row start="1510" />
			<Row start="1520" />
			<Row start="1530" />
			<Row start="1550" />
			<Row start="1640" />
			<tr>
				<Timecol start="1730" />
				<td colSpan="4">Lightning talk</td>
			</tr>
		</tbody>
	)
}
