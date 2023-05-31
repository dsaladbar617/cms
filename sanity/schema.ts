import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		{
			name: 'blog',
			type: 'document',
			title: 'Blog',
			fields: [
				{
					name: 'title',
					type: 'string',
					title: 'Title'
				},
				{
					name: 'subtitle',
					type: 'string',
					title: 'Subtitle'
				},
				{
					name: 'slug',
					type: 'slug',
					title: 'Slug'
				}
			]
		}
	]
};
