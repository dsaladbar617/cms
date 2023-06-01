import Card from 'src/app/components/Card';
import { getAllBlogs } from '../../sanity/lib/api';

export default async function Home() {
	interface Blog {
		title: string;
		body: string;
		author: { name: string; avatar: string };
		date: Date;
		slug: string;
		coverImage: string;
	}

	const blogs = await getAllBlogs();

	console.log(blogs);

	return (
		<main className="grid grid-flow-row min-h-screen pt-24 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
			{blogs.map((blog: Blog, index: number) => (
				<Card
					key={index}
					title={blog.title}
					body={blog.body}
					author={blog.author}
					date={blog.date}
					slug={blog.slug}
					image={blog.coverImage}
				/>
			))}
		</main>
	);
}
