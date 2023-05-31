import { client } from './client';

async function getAllBlogs() {
	const results = await client.fetch(`*[_type == "blog"]`);
	return results;
}

export { getAllBlogs };
