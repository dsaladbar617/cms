import { client } from './client';

const blogFields = `title, body, 'author': author->{name, 'avatar': avatar.asset->url}, date, 'slug': slug.current, 'coverImage': coverImage.asset->url`;

async function getAllBlogs() {
	const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
	return results;
}

async function getBlogBySlug(slug: string) {
	const result = await client
		.fetch(
			`*[_type == 'blog' && slug.current == $slug] {
		${blogFields}
	}`,
			{ slug }
		)
		.then((res) => res?.[0]);

	return result;
}

async function getAllSlugs() {
	const results = await client.fetch(`*[_type == "blog"]{'slug':slug.current}`);
	return results;
}

export { getAllBlogs, getBlogBySlug, getAllSlugs };
