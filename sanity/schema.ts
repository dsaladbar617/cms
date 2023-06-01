import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		{
			name: 'author',
			type: 'document',
			title: 'Author',
			fields: [
				{
					name: 'name',
					type: 'string',
					title: 'Name'
				},
				{
					name: 'avatar',
					type: 'image',
					title: 'Avatar'
				}
			]
		},
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
					name: 'body',
					type: 'string',
					title: 'Body'
				},
				{
					name: 'author',
					type: 'reference',
					title: 'Author',
					to: [{ type: 'author' }],
					validation: (Rule) => Rule.required()
				},
				{
					name: 'date',
					type: 'datetime',
					title: 'Date',
					validation: (Rule) => Rule.required()
				},
				{
					name: 'slug',
					type: 'slug',
					title: 'Slug',
					validation: (Rule) => Rule.required()
				},
				{
					name: 'coverImage',
					type: 'image',
					title: 'Cover Image'
				}
			]
		}
	]
};
