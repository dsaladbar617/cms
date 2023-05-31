import Card from 'src/app/components/Card';
import { getAllBlogs } from '../../sanity/lib/api';

export default async function Home() {
	interface Blog {
		title: string;
		subtitle: string;
		slug: string;
	}

	const blogs = await getAllBlogs();

	return (
		<main className="flex min-h-screen flex-col items-center pt-24">
			{blogs.map((blog: Blog, index: number) => (
				<Card key={index} />
			))}
		</main>
	);
}
