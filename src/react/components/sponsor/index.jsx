import React, { Component } from 'react'
import * as sponsors from './sponsor.jsx'
import { open as fancybox } from 'stores/fancybox.js'
import makeContent from './makeContent.jsx'

function Sponsors(props) {
	const list = props.list.map((sponsor, key) => {
		const Content = makeContent(sponsor)
		return (
			<div className="sponsor" key={key} onClick={() => {fancybox(Content)}}>
				<img role="logo" src={"images/logos/"+sponsor.logo} />
				<p>{sponsor.name}</p>
			</div>
		)
	})
	return (
		<div className="sponsor-class-list">
			{list}
		</div>
	)
}

export default class extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.active !== nextProps.active
	}

	render() {
		return (
			<div id="sponsor-page" className={this.props.active ? 'active' : ''}>
				<section>
					<h2>共同主辦</h2>
					<Sponsors list={sponsors.organizer} />
				</section>
				<section>
					<h2>協辦單位</h2>
					<Sponsors list={sponsors.coorganizer} />
				</section>
				<section>
					<h2>黃金級贊助</h2>
					<Sponsors list={sponsors.golden} />
				</section>
				<section>
					<h2>白銀級贊助</h2>
					<Sponsors list={sponsors.silver} />
				</section>
				<section>
					<h2>青銅級贊助</h2>
					<Sponsors list={sponsors.bronze} />
				</section>
				<section>
					<h2>特別感謝</h2>
					<Sponsors list={sponsors.thanks} />
				</section>
				<section>
					<h2>媒體夥伴</h2>
					<Sponsors list={sponsors.medias} />
				</section>
			</div>
		)
	}
}
