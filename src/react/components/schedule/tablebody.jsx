import React, { Component } from 'react'
import Row from './row.jsx'
import Timecol from './timecol.jsx'
import Col from './col.jsx'
import { open as fancybox } from 'stores/fancybox.js'
import makeContent from './makeContent.jsx'

const TBody = (props) => {
	const datas = props.datas
	const contentKeynote1 = makeContent(datas["09:10"]["R0"])
	const contentKeynote2 = makeContent(datas["10:10"]["R0"])
	const panel = makeContent(datas["12:50"]["R0"])
	const specialSharing = makeContent(datas["18:20"]["R0"])
	const nightEvent = makeContent(datas["18:35"]["R0"])
	return (
		<tbody>
			<tr>
				<th></th>
				<th>
					R2
					<div>
						<a href="https://hackmd.io/CwVgnARghlBMAcBaAzAdgGzscDAzRUuUqi8AJrshBAAyqwCMZEQA?both" target="blank">共筆</a>
						<a href="https://www.youtube.com/watch?v=SvHeugrf290" target="blank">直播</a>
					</div>
				</th>
				<th>
					R0
					<div>
						<a href="https://hackmd.io/GYVgRgHAzALA7ABgLRjCGSYFMBMckCcOAJlEjjAnHAIYBsdIcwAjEA==?both" target="blank">共筆</a>
						<a href="https://www.youtube.com/watch?v=__w_1FyDzgQ" target="blank">直播</a>
					</div>
				</th>
				<th>
					R1
					<div>
						<a href="https://hackmd.io/JwdgRgTAjCEQtAMygBhPALBiAOeOBTAYwGZ4ATAVmAMuxUsQxCA=?both" target="blank">共筆</a>
						<a href="https://www.youtube.com/watch?v=0zTpUJn-2AQ" target="blank">直播</a>
					</div>
				</th>
				<th>
					R3
					<div>
						<a href="https://hackmd.io/MwNhBYFMDMCMEMC0BWADARnI85kkbMDogEwDsssJwJAxrGarEA==?both" target="blank">共筆</a>
					</div>
				</th>
				<th>
					交誼廳
					<div>
						<a href="https://hackmd.io/AwTgjAJgZgRlCmBaAhgFlQVka4UDsiMAxkSIvAGxh5gDMUAHBkdUA===?both" target="blank">共筆</a>
					</div>
				</th>
			</tr>
			<tr>
				<Timecol start="0830" />
				<td colSpan="5"><div>入場時間</div></td>
			</tr>
			<tr>
				<Timecol start="0900" />
				<td colSpan="5"><div>開幕</div></td>
			</tr>
			<tr>
				<Timecol start="0910" />
				<td colSpan="5" onClick={() => { fancybox(contentKeynote1) }} className="clickable">
					<Col data={datas["09:10"]["R0"]} />
				</td>
			</tr>
			<tr>
				<Timecol start="1010" />
				<td colSpan="5" onClick={() => { fancybox(contentKeynote2) }} className="clickable">
					<Col data={datas["10:10"]["R0"]} />
				</td>
			</tr>
			<Row start="1110" data={datas["11:10"]} />
			<Row start="1130" data={datas["11:30"]} />
			<tr>
				<Timecol start="1150" />
				<td colSpan="5"><div>午餐</div></td>
			</tr>
			<tr>
				<Timecol start="1250" />
				<td colSpan="5" onClick={() => { fancybox(panel) }} className="clickable">
					<div>論壇</div>
					<Col data={datas["12:50"]["R0"]} />
				</td>
			</tr>
			<Row start="1440" data={datas["14:40"]} />
			<tr></tr>
			<Row start="1455" data={datas["14:55"]} />
			<Row start="1500" data={datas["15:00"]} />
			<Row start="1510" data={datas["15:10"]} />
			<tr></tr>
			<tr>
				<Timecol start="1520" />
				<td colSpan="5"><div>點心</div></td>
			</tr>
			<Row start="1600" data={datas["16:00"]} />
			<Row start="1620" data={datas["16:20"]} />
			<Row start="1650" data={datas["16:50"]} />
			<Row start="1710" data={datas["17:10"]} />
			<tr>
				<Timecol start="1730" />
				<td colSpan="5">
					<div>
						Lightning talk
							<br />Just go Open, I've Got Your Back!
							<br />你在共用密碼啊！
							<br />How we hacked
							<br />Sudo. 四重奏
							<br />TDOH 2017 全台校園攻略大公開
							<br />T.H.U - 選課天眼通
							<br />SITCON PASS
					</div>
				</td>
			</tr>
			<tr>
				<Timecol start="1820" />
				<td colSpan="5" onClick={() => { fancybox(specialSharing) }} className="clickable">
					<Col data={datas["18:20"]["R0"]} />
				</td>
			</tr>
			<tr>
				<Timecol start="1825" />
				<td colSpan="5"><div>閉幕</div></td>
			</tr>
			<tr>
				<Timecol start="1835" end="2040" />
				<td colSpan="5" onClick={() => { fancybox(nightEvent) }} className="clickable">
					<Col data={datas["18:35"]["R0"]} />
				</td>
			</tr>
		</tbody>
	)
}

export default class extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false
	}

	render() {
		return (
			<TBody datas={this.props.datas} />
		)
	}
}
