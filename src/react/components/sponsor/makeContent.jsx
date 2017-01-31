import React, { Component } from 'react'

export default function(props) {
	const logo = "images/logos/"+props.logo
	const name = props.name
	const Intro = props.intro
	return () => {
		return (
			<div>
				<section>
					<img role="logo" src={logo} />
					<h2>{name}</h2>
					<Intro />
				</section>
			</div>
		)
	}
}
