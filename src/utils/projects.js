import messengerApp from "../assets/messenger_app.webp";
import blogApp from "../assets/blog_app.webp";
import fileStorageApp from "../assets/filestorage_app.webp";

const projects = {
  featured: [
    {
      title: "Messenger Chat App",
      image: messengerApp,
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
