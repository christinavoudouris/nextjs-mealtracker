// The following function is shared with getStaticProps and API routes
export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://1eit.com/wp-json/wp/v2/posts?_embed&author=3')
  const data = await res.json()

  return data
}