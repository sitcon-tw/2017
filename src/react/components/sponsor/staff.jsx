import React, { Component } from 'react'
import request from 'request-promise'

function StaffGroup(props) {
	return (
		<div role="staffs">
			<div role="staff-group">{props.name}</div>
			<div role="staff-member">
				{props.members.map((mem, index) => {
					return <StaffMember key={ index } profile={ mem.profile } />
				})}
			</div>
		</div>
	)
}

function StaffMember(props) {

	let avatarLink = props.profile.avatar.match('^/media') ? '//staff.sitcon.org' + props.profile.avatar : props.profile.avatar

	return (
		<div role="staff-card">
			<img role="staff-avatar" src={ avatarLink }></img>
			<p>{ props.profile.display_name }</p>
		</div>
	)
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			'總召': [],
			'行政組': [],
			'議程組': [],
			'行銷組': [],
			'財務組': [],
			'文創組': [],
			'場務組': [],
			'線路組': [],
			'編輯組': [],
			'紀錄組': [],
			'直播組': [],
		}
	}

	onloadHandler(data) {
		const nState = {}
		data.forEach((group) => {
			nState[group.name] = group.users
		})
		this.setState(nState)
	}

	componentDidMount() {
		request('https://staff.sitcon.org/api/staffgroups/?format=json')
			.then((datas) => {
				try {
					this.onloadHandler(JSON.parse(datas))
				}
				catch(err) {
					console.error('Can not parse staff api')
					return
				}
			})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState['文創組'].length !== this.state['文創組'].length
	}

	render() {
		return (
			<div>
				{Object.keys(this.state).map((groupName) => {
					return (<StaffGroup name={groupName} members={this.state[groupName]} key={groupName} />)
				})}
			</div>
		)
	}
}
