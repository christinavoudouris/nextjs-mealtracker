export default function MealsP({ meals, onRemoveMeal }) {
	return meals
		.sort((a, b) => {
			if (a.date < b.date) return -1
			else if (a.date > b.date) return 1
			return 0
		})
		.map(meal => (
			<tr key={meal._id}>
				<td>{meal.date}</td>
				<td>
					{meal.portion}{' '}
					{meal.place === '@' + ' ' + 'home' ? null : '@' + ' ' + meal.place}
				</td>
				<td style={{ whiteSpace: 'pre-line' }}>
					{meal.calories
						? meal.calories +
						  ' cals' +
						  ' / ' +
						  (meal.calories / 2000) * 100 +
						  '%' +
						  '\n'
						: null}
					{meal.fat ? meal.fat + 'g ' + 'fat' + '\n' : null}
					{meal.carbs ? meal.carbs + 'g ' + 'carbs' + '\n' : null}
					{meal.protein ? meal.protein + 'g ' + 'protein' : null}
				</td>
				<td>
					<span className="graphic">
						{meal.healthy ? <i className="material-icons">favorite</i> : null}
						{meal.semihealthy ? (
							<i className="material-icons">sentiment_satisfied</i>
						) : null}
						{meal.unhealthy ? (
							<i className="material-icons">sentiment_very_dissatisfied</i>
						) : null}
					</span>
				</td>
				<td>
					<i
						className="material-icons"
						data-bs-toggle="modal"
						style={{ cursor: 'pointer' }}
						data-bs-target={'#staticBackdrop' + meal._id}
						data-id={meal._id}
					>
						close
					</i>
					<div
						className="modal fade"
						id={'staticBackdrop' + meal._id}
						data-bs-backdrop="static"
						data-bs-keyboard="false"
						tabIndex="-1"
						aria-labelledby="Are you sure?"
						aria-hidden="true"
					>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="Are you sure?">
										Are you sure . . .
									</h5>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body">
									. . . you want to delete this meal?
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
									>
										No, go back
									</button>
									<button
										type="button"
										className="btn btn-success"
										data-bs-dismiss="modal"
										data-id={meal._id}
										onClick={() => onRemoveMeal(meal._id)}
									>
										Yes
									</button>
								</div>
							</div>
						</div>
					</div>
				</td>
			</tr>
		))
}
