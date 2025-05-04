// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// documents/project.ts
import { defineDocumentType } from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    label: {
      type: "enum",
      options: ["real", "dummy"],
      description: "The type of the project",
      required: true
    },
    title: {
      type: "string",
      description: "The title of the project",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true
    },
    techstack: {
      type: "list",
      of: { type: "string" },
      description: "The techstack of the project",
      required: true
    },
    urlgithub: {
      type: "string",
      description: "The url github of the project",
      required: false
    },
    urlweb: {
      type: "string",
      description: "The url web demo of the project",
      required: false
    },
    date: {
      type: "date",
      description: "The date of the project",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^projects\//, "")
    },
    image: {
      type: "string",
      description: "The url image of the project",
      resolve: (doc) => {
        return `/contentlayer/${doc._raw.flattenedPath}.png`;
      }
    }
  }
}));

// documents/blog.ts
import { defineDocumentType as defineDocumentType2 } from "contentlayer/source-files";
var Blog = defineDocumentType2(() => ({
  name: "Blog",
  filePathPattern: `blogs/*.mdx`,
  contentType: "mdx",
  fields: {
    label: {
      type: "string",
      description: "The type of the blog",
      required: true
    },
    title: {
      type: "string",
      description: "The title of the blog",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the blog",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the blog",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blogs\//, "")
    },
    image: {
      type: "string",
      description: "The url image of the blogs",
      resolve: (doc) => {
        return `/contentlayer/${doc._raw.flattenedPath}.png`;
      }
    }
  }
}));

// contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath: "contents",
  documentTypes: [Project, Blog]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PZQNJXD6.mjs.map
