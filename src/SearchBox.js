import React from 'react'

export default function SearchBox({ onSearchChange }) {
	return (
		<div >
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="Search"
				onChange={onSearchChange}
			/>
		</div>
	)
}
