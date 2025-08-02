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
      description: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe cumque."],
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
