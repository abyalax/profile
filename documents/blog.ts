import { defineDocumentType } from "contentlayer/source-files"

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blogs/*.mdx`,
    contentType: 'mdx',
    fields: {
        label: {
            type: 'string',
            description: 'The type of the blog',
            required: true,
        },
        title: {
            type: 'string',
            description: 'The title of the blog',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the blog',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the blog',
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.replace(/^blogs\//, ''),
        },
        image: {
            type: 'string',
            description: 'The url image of the blogs',
            resolve: (doc) => {
                return `/contentlayer/${doc._raw.flattenedPath}.png`
            },
        },
    },
}))