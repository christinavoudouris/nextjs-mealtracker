import { useRef } from 'react'

export default function MealForm({ meal }) {
	const date = useRef()
	const portion = useRef()
	const place = useRef()
	const calories = useRef()
	const healthy = useRef()
	const semihealthy = useRef()
	const unhealthy = useRef()

	const submit = e => {
		e.preventDefault()
		meal({
			date: date.current.value,
			portion: portion.current.value,
			place: place.current.value,
			calories: calories.current.value,
			healthy: healthy.current.checked,
			semihealthy: semihealthy.current.checked,
			unhealthy: unhealthy.current.checked,
		})
		// date.current.value = ''
		portion.current.value = ''
		place.current.value = ''
		calories.current.value = ''
		healthy.current.checked = false
		semihealthy.current.checked = false
		unhealthy.current.checked = false
	}

	return (
		<form onSubmit={submit} aria-label="Add a meal">
			<div className="row g-3">
				<div className="col-sm">
					<label htmlFor="date" className="form-label">
						Date
					</label>
					<input
						ref={date}
						defaultValue={new Date().toDateString()}
						id="date"
						name="date"
						placeholder="Date"
						aria-label="Date"
						required="required"
						className="form-control mb-3"
					/>
				</div>

				<div className="col-sm">
					<label htmlFor="portionList" className="form-label">
						Meal
					</label>
					<input
						id="portionList"
						className="form-control mb-3"
						ref={portion}
						name="portion"
						placeholder="Select one or add your own"
						aria-label="Meal"
						required="required"
						list="portionListOptions"
					/>
					<datalist id="portionListOptions">
						<option value="Avocado Tuna Salad" />
						<option value="Baked Beans" />
						<option value="Brussels Sprout Hash & Eggs" />
						<option value="Cold (and Spicy?) Asian Noodles" />
						<option value="Creamy Avocado Pasta" />
						<option value="Creamy Italian Cucumber Salad" />
						<option value="Creamy Spinach Orzo" />
						<option value="Creamy Vegan Pantry Pasta" />
						<option value="Creamy Vegan Spaghetti Carbonara" />
						<option value="Creamy Zucchini Fettuccine" />
						<option value="Cucumber Tomato Avocado Salad" />
						<option value="Easy Chili Garlic Oil Noodles" />
						<option value="Easy Lemon Pasta" />
						<option value="'Egg' Salad" />
						<option value="Egg Sandwiches with Mushroom Hash" />
						<option value="Green Chili & Cheddar Quesadillas" />
						<option value="Guacamole" />
						<option value="Healthy Avocado Chickpea Salad Sandwich" />
						<option value="Healthy Banana Pancakes" />
						<option value="Healthy Chocolate Pumpkin Bread" />
						<option value="Lemon Poppy Seed Pancakes" />
						<option value="Lentil Soup" />
						<option value="Meatless 'Meat' Sauce with Chickpeas & Mushrooms" />
						<option value="Miso Butter Mazemen (Japanese No-Broth Ramen Noodles)" />
						<option value="Miso with Ramen Noodles & Stir-Fried Vegetables" />
						<option value="Omelet" />
						<option value="One Pan Mexican Quinoa" />
						<option value="Peanut Butter & Jelly Granola Bars" />
						<option value="Roasted Kale & Chickpea Salad w/Lemon Tahini Dressing" />
						<option value="Smashed Chickpea & Avocado Salad Sandwich" />
						<option value="Spicy Panzanella" />
						<option value="Taco Salad" />
						<option value="Tofu Hot Pot" />
						<option value="Tomato & Tuna Spaghetti" />
						<option value="Tomato Scrambled Eggs" />
						<option value="Vegan Parmesan Cheese" />
					</datalist>
				</div>
			</div>
			<div className="row g-3">
				<div className="col-sm">
					<label htmlFor="placeList" className="form-label">
						Place
					</label>
					<input
						id="placeList"
						className="form-control mb-3"
						ref={place}
						placeholder="Select 'home' or add your own"
						name="place"
						aria-label="Place"
						required="required"
						list="placeListOptions"
					/>
					<datalist id="placeListOptions">
						<option value="home" />
					</datalist>
				</div>

				<div className="col-sm">
					<label htmlFor="calories" className="form-label">
						Calories
					</label>
					<input
						id="calories"
						className="form-control mb-3"
						ref={calories}
						name="calories"
						placeholder="Calories"
						aria-label="calories"
						type="number"
					/>
				</div>
			</div>
			<div className="form-check">
				<input
					id="healthy"
					type="radio"
					name="group1"
					className="form-check-input"
					ref={healthy}
				/>
				<label htmlFor="group1" className="form-check-label">
					Healthy
				</label>
			</div>
			<div className="form-check">
				<input
					id="semihealthy"
					type="radio"
					name="group1"
					className="form-check-input"
					ref={semihealthy}
				/>
				<label htmlFor="group1" className="form-check-label">
					Semi-healthy
				</label>
			</div>
			<div className="form-check">
				<input
					id="unhealthy"
					type="radio"
					name="group1"
					className="form-check-input"
					ref={unhealthy}
				/>
				<label htmlFor="group1" className="form-check-label">
					Unhealthy
				</label>
			</div>
			<button
				className="btn btn-success mt-2 mb-4"
				type="submit"
				value="Submit"
			>
				Add Meal
			</button>
		</form>
	)
}
