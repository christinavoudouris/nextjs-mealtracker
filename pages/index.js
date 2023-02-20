import Head from 'next/head'
import { Provider } from '../context/Context'
import Link from 'next/link'
import Meals from '../components/Meals'

export default function Home() {
	return (
		<Provider>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<main className="container" style={{ marginTop: '10px' }}>
				<ul>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
				</ul>
				<Meals />
			</main>
		</Provider>
	)
}
