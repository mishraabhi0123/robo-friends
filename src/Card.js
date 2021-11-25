import React from 'react'

export default function Card({ info }) {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${info.id}?200x200`} alt="robots" />
			<div className="tc">
				<h2>{info.name}</h2>
				<p>{info.email}</p>
			</div>
		</div>
	)
}
