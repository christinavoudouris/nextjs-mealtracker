import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const Context = createContext()

export const Provider = ({ children }) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [meals, setMeals] = useState([])

	// pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [thingsPerPage] = useState(5)

	const MEALS_URL = 'https://nodeexpressapi.glitch.me/api/meals'

	// get
	useEffect(() => {
		fetchMeals()
	}, [])

	async function fetchMeals() {
		try {
			const res = await axios.get(MEALS_URL)
			setMeals(res.data)
			setIsLoaded(true)
		} catch (err) {
			console.log(err)
		}
	}

	// count
	const countMeals = filter =>
		meals.filter(meal => (filter ? meal[filter] : meal)).length

	// add
	async function addMeal(meal) {
		const res = await axios.post(MEALS_URL, meal)
		setMeals([...meals, res.data])
	}

	// delete
	function removeMeal(id) {
		axios.delete(MEALS_URL + `/${id}`, { data: id })
		setMeals(meals.filter(meal => meal._id !== id))
	}

	// pagination
	const indexOfLastThing = currentPage * thingsPerPage
	const indexOfFirstThing = indexOfLastThing - thingsPerPage
	const currentMeals = meals.slice(indexOfFirstThing, indexOfLastThing)
	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<Context.Provider
			value={{
				meals,
				setMeals,
				fetchMeals,
				addMeal,
				removeMeal,
				countMeals,
				currentMeals,
				thingsPerPage,
				paginate,
				isLoaded,
				setIsLoaded,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
