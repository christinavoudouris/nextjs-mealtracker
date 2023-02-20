export default function Alert() {
	return (
		<div
			className="alert alert-success"
			role="alert"
			style={{ marginTop: '20px' }}
		>
			This is a full stack CRUD application I developed a while back and
			recently migrated to NextJS (
			<a
				href="https://github.com/christinavoudouris/nextjs-mealtracker"
				target="_blank"
				rel="noopener noreferrer"
			>
				view source on Github
			</a>
			). It connects to a barebones{' '}
			<a
				href="https://glitch.com/edit/#!/nodeexpressapi"
				target="_blank"
				rel="noopener noreferrer"
			>
				Node/Express API
			</a>{' '}
			hosted on Glitch.
		</div>
	)
}
