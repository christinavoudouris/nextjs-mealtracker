import Link from 'next/link'

export default function Pagination({ thingsPerPage, totalThings, paginate }) {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalThings / thingsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<nav aria-label="Page navigation">
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<Link
							className="page-link"
							onClick={() => paginate(number)}
							href="#"
						>
							{number}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
