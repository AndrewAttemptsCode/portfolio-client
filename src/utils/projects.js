import messengerApp from "../assets/messenger_app.webp";
import blogApp from "../assets/blog_app.webp";
import fileStorageApp from "../assets/filestorage_app.webp";

const projects = {
  featured: [
    {
      title: "Messenger Chat App",
      image: messengerApp,
      links: {
        demo: ["https://odin-messaging-app-client.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-messaging-app-client", "https://github.com/AndrewAttemptsCode/odin-messaging-app-server"],
      },
      description: [
        "A messaging app where users can create accounts, send messages to each other, and customize their profiles.",
        "Interactivity is handled using modern web tools, making the app fast and responsive.",
        "User login is securely managed by a server, with all data stored in a structured database that is easy to maintain and expand.",
        "Live message updates are not supported — users will need to refresh the page to see new messages."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components", "Vite"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Passport.js"],
        tools: ["Git", "GitHub", "VS Code", "Railway", "Cloudflare Pages", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "Blog App",
      image: blogApp,
      links: {
        demo: ["https://odinblogapi-public-client.pages.dev/"],
        source: [
          "https://github.com/AndrewAttemptsCode/odinblogapi-public-client",
          "https://github.com/AndrewAttemptsCode/odinblogapi-admin-client",
          "https://github.com/AndrewAttemptsCode/odinblogapi-server"
        ],
      },
      description: [
        "A blog app utilizing two websites - one for the readers to browse and comment on blog posts, and another for authorized users to create and publish blog posts.",
        "Interactivity is handled using modern web tools, making the app fast and responsive all whilst content is dynamically displayed.",
        "User login is securely managed by a server, with all data stored in a structured database that is easy to maintain and expand."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components", "Vite"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Passport.js"],
        tools: ["Git", "GitHub", "VS Code", "Railway", "Cloudflare Pages", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "File Storage App",
      image: fileStorageApp,
      links: {
        demo: ["https://www.google.co.uk", "https://www.twitch.tv"],
        source: ["https://www.google.co.uk", "https://www.twitch.tv"],
      },
      description: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe cumque."],
      techstack: {
        frontend: ["HTML", "CSS"],
        backend: ["Node.js"],
        tools: ["VS Code"],
        testing: ["SuperTest"],
      },
    },
  ],
};

export default projects;
