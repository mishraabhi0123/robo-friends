import React, { useEffect, useMemo, useState } from 'react'
import CardList from './CardList'
import SearchBox from "./SearchBox"
import axios from 'axios'
import Scroll from "./Scroll"

const getUsers = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/users')
	return response.data;
}

export default function App() {
	const [searchField, setSearchField] = useState("")
	const [users, setUsers] = useState([])

	useEffect(() => {
		getUsers()
			.then(users => {
				setUsers(users)
			})
	}, [])

	function onSearchChange(e) {
		setSearchField(e.target.value)
	}
	const filtered = useMemo(() => users.filter((robot) => {
		return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
	}), [searchField, users])

	return (
		<div className="tc">
			<h1> RoboFriends </h1>
			<SearchBox className="ma3" onSearchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filtered} />
			</Scroll>
		</div>
	)
}
