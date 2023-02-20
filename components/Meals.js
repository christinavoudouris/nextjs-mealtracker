import { useContext } from 'react'
import Context from '../context/Context'
import MealForm from './MealForm'
import MealsP from './MealsP'
import Pagination from './Pagination'

export default function Meals() {
	const {
		meals,
		countMeals,
		addMeal,
		removeMeal,
		currentMeals,
		thingsPerPage,
		paginate,
		isLoaded,
	} = useContext(Context)

	function MealsCount({ total, healthy, semihealthy, unhealthy }) {
		return (
			<ul style={{ marginTop: '20px' }}>
				<li
					className="center-align"
					style={{ display: 'inline', marginRight: '20px' }}
				>
					{total} total! <i className="material-icons">thumb_up</i>
				</li>
				<li style={{ display: 'inline', marginRight: '20px' }}>
					{healthy} healthy <i className="material-icons">favorite</i>
				</li>
				<li style={{ display: 'inline', marginRight: '20px' }}>
					{semihealthy} semi-healthy{' '}
					<i className="material-icons">sentiment_satisfied</i>
				</li>
				<li style={{ display: 'inline' }}>
					{unhealthy} unhealthy{' '}
					<i className="material-icons">sentiment_very_dissatisfied</i>
				</li>
			</ul>
		)
	}

	return (
		<div className="container">
			<MealsCount
				total={countMeals()}
				healthy={countMeals('healthy')}
				semihealthy={countMeals('semihealthy')}
				unhealthy={countMeals('unhealthy')}
			/>
			<MealForm meal={addMeal} />
			{isLoaded ? (
				<p style={{ textAlign: 'center' }}>
					<b>Loading . . . be patient!</b>
				</p>
			) : (
				<>
					<div className="table-responsive">
						<table className="table table-success table-hover">
							<thead>
								<tr>
									<th scope="col">Date</th>
									<th scope="col">Meal</th>
									<th scope="col"></th>
									<th scope="col"></th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<MealsP meals={currentMeals} onRemoveMeal={removeMeal} />
							</tbody>
						</table>
					</div>
					<Pagination
						thingsPerPage={thingsPerPage}
						totalThings={meals.length}
						paginate={paginate}
					/>
					<p>
						<sup>*</sup>Percentages = daily calorie intake, based on a 2000
						calorie diet.
					</p>
				</>
			)}
		</div>
	)
}
