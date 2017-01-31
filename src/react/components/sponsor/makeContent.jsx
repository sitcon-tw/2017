import React, { Component } from 'react'

export default function(props) {
	const logo = { backgroundImage: "url(images/logos/"+props.logo+")" }
	const name = props.name
	const Intro = props.intro
	return () => {
		return (
			<div>
				<section>
					<div role="logo" style={logo}></div>
					<h2>{name}</h2>
					<Intro />
				</section>
			</div>
		)
	}
}
