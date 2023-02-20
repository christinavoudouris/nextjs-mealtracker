import { loadPosts } from '../../lib/load-posts'
import Link from 'next/link'

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
	return (
		<div class="container">
			{posts.map((post, i) => (
				<h1 key={i}>{post.title.rendered}</h1>
			))}
			<Link href="/">Go back</Link>
		</div>
	)
}

// This function runs only on the server side
export async function getStaticProps() {
	// Instead of fetching your `/api` route you can call the same function directly
	const posts = await loadPosts()

	// Props returned will be passed to the page component
	return { props: { posts } }
}

export default Blog
