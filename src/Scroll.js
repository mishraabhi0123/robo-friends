import React from 'react'

export default function Scroll({ children }) {
	return (
		<div style={{
			overflowY: "scroll",
			border: "1px solid white",
			height: "500px",
			margin: "20px"
		}}>
			{children}
		</div>
	)
}
