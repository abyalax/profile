const githubIcon = "/assets/svg/github.svg"
const linkIcon = "/assets/svg/link.svg"
const twitter = "/assets/svg/twitter.svg"
const instagram = "/assets/svg/instagram.svg"
const linkedin = "/assets/svg/linkedin.svg"

const svgIcon = { githubIcon, linkIcon, twitter, instagram, linkedin }

const techStack = {
    highlight: [
        { title: "NodeJS", description: "Backend runtime", url: "/assets/tools/nodejs.png" },
        { title: "Next", description: "React Fullstack", url: "/assets/tools/nextjs.png" },
        { title: "Express", description: "Lightweight Backend", url: "/assets/tools/express.png" },
        { title: "Nest", description: "Scalable Backend", url: "/assets/tools/nestjs.webp" },
        { title: "Laravel", description: "PHP framework", url: "/assets/tools/laravel.png" },
        { title: "TypeScript", description: "Typed JavaScript", url: "/assets/tools/ts.webp" },
        { title: "PHP", description: "Modern Version php", url: "/assets/tools/php.png" },
        { title: "SQL", description: "Relational Database", url: "/assets/tools/sql.webp" },
        { title: "MongoDB", description: "NoSQL database", url: "/assets/tools/mongodb.webp" },
        { title: "Cloudinary", description: "Media storage", url: "/assets/tools/cloudinary.webp" },
    ],
    hidden: [
        { title: "HTML", description: "Markup language", url: "/assets/tools/html.webp" },
        { title: "CSS", description: "Styling language", url: "/assets/tools/css.webp" },
        { title: "JavaScript", description: "Scripting language", url: "/assets/tools/js.webp" },
        { title: "Tailwind CSS", description: "Utility-first CSS", url: "/assets/tools/tailwinds.png" },
        { title: "React", description: "UI library", url: "/assets/tools/react.webp" },
        { title: "VS Code", description: "Code editor", url: "/assets/tools/vscode.png" },
        { title: "Postman", description: "API testing", url: "/assets/tools/postman.png" },
        { title: "Git", description: "Version control", url: "/assets/tools/git.webp" },
        { title: "GitHub", description: "Code hosting", url: "/assets/tools/github.webp" },
    ],
};

export { svgIcon, techStack }