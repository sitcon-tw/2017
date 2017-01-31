import React, { Component } from 'react'
import Row from './row.jsx'
import Timecol from './timecol.jsx'
import Col from './col.jsx'

export default function(props) {
	const datas = props.datas
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
				<td colSpan="4"><Col data={datas["01:10"]["R0"]} /></td>
			</tr>
			<tr>
				<Timecol start="0900" />
				<td colSpan="4"><Col data={datas["02:10"]["R0"]} /></td>
			</tr>
			<Row start="1110" data={datas["03:10"]} />
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
			<Row start="1510" data={datas["07:10"]} />
			<Row start="1520" data={datas["07:20"]} />
			<Row start="1530" data={datas["07:30"]} />
			<Row start="1550" data={datas["07:50"]} />
			<Row start="1640" data={datas["08:40"]} />
			<tr>
				<Timecol start="1730" />
				<td colSpan="4">Lightning talk</td>
			</tr>
		</tbody>
	)
}
