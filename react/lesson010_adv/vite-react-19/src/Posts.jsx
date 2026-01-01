// import { useState, useEffect } from 'react'; // before react@19 and hook "use"
import { use, Suspense } from 'react';

function GetPosts() {
	const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
		res.json(),
	);

	const posts = use(fetchPosts);

	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}

export function Posts() {
	// const [posts, setPosts] = useState(null); // before react@19
	// const [loading, setLoading] = useState(true); // before react@19

	/* before react@19
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loding posts...</div>;
	}
		*/

	return (
		<Suspense fallback={<div>Loding posts...</div>}>
			<GetPosts />
		</Suspense>
	);
}
