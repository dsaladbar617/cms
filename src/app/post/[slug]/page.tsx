import { FC } from 'react';
import { getAllSlugs, getBlogBySlug } from '../../../../sanity/lib/api';

interface pageProps {
	params: {
		slug: string;
	};
}

interface Blog {
	title: string;
	body: string;
	author: {
		name: string;
		avatar: string;
	};
	date: string;
	slug: string;
	coverImage: string;
}

export async function generateStaticParams() {
	const posts = await getAllSlugs();

	return posts.map((post: { slug: string }) => ({
		slug: post.slug
	}));
}

const page = async ({ params }: pageProps) => {
	// const posts = await getAllSlugs();
	// console.log(posts);

	const blog: Blog = await getBlogBySlug(params.slug);
	return (
		<div>
			<h1>{blog.title}</h1>
			<h2>{blog.author.name}</h2>
			<h3>Date: {blog.date}</h3>
		</div>
	);
};

export default page;
