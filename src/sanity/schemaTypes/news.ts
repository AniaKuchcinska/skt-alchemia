import { defineField, defineType } from 'sanity'

export const newsType = defineType({
    name: 'news',
    title: 'Latest News Post',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string'}),
        defineField({ name: 'publishedAt', type: 'date' }),
        defineField({
            name: 'mainImage',
            title: 'Event Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ]
})