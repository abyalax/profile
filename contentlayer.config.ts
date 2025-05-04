import { makeSource } from 'contentlayer/source-files'
import { Project } from './documents/project'
import { Blog } from './documents/blog'

export default makeSource({
    contentDirPath: 'contents',
    documentTypes: [Project, Blog],
})