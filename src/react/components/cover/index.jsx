import React, { Component } from 'react'
import paragraphIntro from './paragraphIntro'

export default class extends Component {
	render() {
		return (
			<div id="cover-page">
				<article className="content-container">
					<h2>Internet For Next Generation</h2>
					{paragraphIntro.map((text, id) => {
						return <p key={id}>{text}</p>;
					})}
				</article>
			</div>
		)
	}
}
