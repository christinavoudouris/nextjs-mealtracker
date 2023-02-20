import { useEffect } from 'react'
import { Provider } from '../context/Context'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min.js')
	}, [])

	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	)
}
