

const getDataPost = async () => {
	const res = await fetch("http://localhost:3000/api/posts");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

const PostList = async () => {

	const posts = await getDataPost();
	return (
		<>
			<ul className="flex flex-col gap-5">
				{posts.map((post, id) => {
					return (
						<li key={id} className="bg-gray-200 p-4 rounded-lg">
							<h1 className="font-bold text-3xl mb-3">
								{post.title}
							</h1>
							<p>{post.description}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default PostList;
