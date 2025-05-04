import { defineDocumentType } from "contentlayer/source-files"

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/*.mdx`,
    contentType: 'mdx',
    fields: {
        label: {
            type: 'enum',
            options: ['real', 'dummy'],
            description: 'The type of the project',
            required: true,
        },
        title: {
            type: 'string',
            description: 'The title of the project',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the project',
            required: true,
        },
        techstack: {
            type: 'list',
            of: { type: 'string' },
            description: 'The techstack of the project',
            required: true,
        },
        urlgithub: {
            type: 'string',
            description: 'The url github of the project',
            required: false,
        },
        urlweb: {
            type: 'string',
            description: 'The url web demo of the project',
            required: false,
        },
        date: {
            type: 'date',
            description: 'The date of the project',
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.replace(/^projects\//, ''),
        },
        image: {
            type: 'string',
            description: 'The url image of the project',
            resolve: (doc) => {
                return `/contentlayer/${doc._raw.flattenedPath}.png`
            },
        },
    },
}))