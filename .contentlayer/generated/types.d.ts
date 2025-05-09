// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Blog = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Blog'
  /** The type of the blog */
  label: string
  /** The title of the blog */
  title: string
  /** The description of the blog */
  description: string
  /** The date of the blog */
  date: IsoDateTimeString
  /** MDX file body */
  body: MDX
  slug: string
  /** The url image of the blogs */
  image: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Project'
  /** The type of the project */
  label: 'real' | 'dummy'
  /** The title of the project */
  title: string
  /** The description of the project */
  description: string
  /** The techstack of the project */
  techstack: string[]
  /** The url github of the project */
  urlgithub?: string | undefined
  /** The url web demo of the project */
  urlweb?: string | undefined
  /** The date of the project */
  date: IsoDateTimeString
  /** MDX file body */
  body: MDX
  slug: string
  /** The url image of the project */
  image: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Blog | Project
export type DocumentTypeNames = 'Blog' | 'Project'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allProjects: Project[]
  allBlogs: Blog[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Blog: Blog
  Project: Project
}

export type NestedTypeMap = {

}

 