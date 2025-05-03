import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the project',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the project',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/contents/projects/${doc._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'contents',
    documentTypes: [Project],
})