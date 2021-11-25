import React from 'react'
import Card from "./Card"

export default function CardList({ robots }) {
	const cardComponents = robots.map((user, i) => {
		return <Card key={i} info={user} />
	})
	return (
		<div>
			{cardComponents}
		</div>
	)
}
