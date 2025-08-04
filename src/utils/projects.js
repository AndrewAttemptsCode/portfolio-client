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
        demo: ["https://odin-file-uploader-production-c8f5.up.railway.app/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-file-uploader"],
      },
      description: [
        "A file storage app where users can sign up, upload files, organize files into folders and with the option to download the files to local systems - similar to a basic version of Google Drive.",
        "Users log in securely, and their session is saved so they stay logged in. Files are uploaded and saved in folders that the user creates. Each file shows details such as the name, size and upload time, with an option to download the file.",
        "Files are stored on an external cloud storage system, and only the file link is saved in the database."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Passport.js", "EJS"],
        tools: ["Git", "GitHub", "VS Code", "Railway", "EsLint", "Prettier"],
        testing: [],
      },
    },
  ],
};

export default projects;
