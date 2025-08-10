import messengerApp from "../assets/messenger_app.webp";
import blogApp from "../assets/blog_app.webp";
import fileStorageApp from "../assets/filestorage_app.webp";
import photoTaggingApp from "../assets/phototagging_app.webp";
import membersOnlyApp from "../assets/membersonly_app.webp";
import moviesInventoryApp from "../assets/moviesinventory_app.webp";
import miniMessageBoardApp from "../assets/minimessageboard_app.webp";
import shoppingCartApp from "../assets/shoppingcart_app.webp";
import memoryCardApp from "../assets/memorycard_app.webp";
import cvBuilderApp from "../assets/cvbuilder_app.webp";
import homepage from "../assets/homepage.webp";

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
  archive: [
    {
      title: "Photo Tagger",
      image: photoTaggingApp,
      links: {
        demo: ["https://odin-photo-tagging-client.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-photo-tagging-client", "https://github.com/AndrewAttemptsCode/odin-photo-tagging-server"],
      },
      description: [
        "A photo tagging app where users can select areas of an image to make guesses to find all the characters.",
        "Interactivity is handled using modern web tools, making the app fast and responsive.",
        "User guess attempts are processed through a server and checked against stored values in a relational database.",
        "On game completion, users can enter their name to be displayed on the leaderboard, ranked by time taken to find all characters."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components", "Vite"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma"],
        tools: ["Git", "GitHub", "VS Code", "Railway", "Cloudflare Pages", "EsLint", "Prettier"],
        testing: ["Jest", "SuperTest"],
      },
    },
    {
      title: "Members Only",
      image: membersOnlyApp,
      links: {
        demo: ["https://odin-members-only-production-d17d.up.railway.app/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-members-only"],
      },
      description: [
        "A messaging board app where users that have joined the club via a hidden phrase on the webpage can submit messages with titles.",
        "Interactivity is handled using modern web tools, making the app fast and responsive.",
        "Users log in securely where they can submit messages that contain a title and message that are processed through a server and checked for validity before being displayed."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "Express", "PostgreSQL", "EJS", "Passport.js"],
        tools: ["Git", "GitHub", "VS Code", "Railway", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "Movies Inventory",
      image: moviesInventoryApp,
      links: {
        demo: ["https://odin-inventory-app-production-2d18.up.railway.app/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-inventory-app"],
      },
      description: [
        "A movies inventory app where users can explore existing movie titles, directors, and genres.",
        "Interactivity is handled using modern web tools, making the app fast and responsive.",
        "Users are able to submit new movies to the inventory, and edit movie entries to assign new genres and directors to the movie.",
        "All the submitted data is handled through a server which is processed and updated in a relational database"
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "Express", "PostgreSQL", "EJS"],
        tools: ["Git", "GitHub", "VS Code", "Railway", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "Mini Message Board",
      image: miniMessageBoardApp,
      links: {
        demo: ["https://odin-mini-message-board-production-79ad.up.railway.app/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-mini-message-board"],
      },
      description: [
        "A mini messaging board where users can submit a message with title that will be displayed on the homepage.",
        "Interactivity is handled using modern web tools, making the app fast and responsive.",
        "All the submitted data is handled through a server which is processed and updated in a relational database"
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "Express", "PostgreSQL", "EJS"],
        tools: ["Git", "GitHub", "VS Code", "Railway", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "Shopping Cart",
      image: shoppingCartApp,
      links: {
        demo: ["https://odin-shopping-cart-f4u.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-shopping-cart"],
      },
      description: [
        "An interactive online shop application where users can browse and select multiple products to add to a dynamically updating shopping cart. The cart automatically recalculates the total quantity and price in real time, ensuring a smooth and intuitive shopping experience.",
        "Interactivity is handled using modern web tools, making the app fast and responsive."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components", "Vite"],
        backend: [],
        tools: ["Git", "GitHub", "VS Code", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "Memory Cards",
      image: memoryCardApp,
      links: {
        demo: ["https://odin-memory-card-b4m.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-memory-card"],
      },
      description: [
        "A fun and interactive memory game where players try to click each unique card without repeating any. Each time a card is clicked, all the cards shuffle into a new random order, keeping the game challenging. The scoreboard tracks the player’s current score and best score, adding a competitive edge to each round.",
        "Images for the cards are fetched from an online source, making the game visually engaging and unique every time it’s played."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Vite"],
        backend: [],
        tools: ["Git", "GitHub", "VS Code", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "CV Builder",
      image: cvBuilderApp,
      links: {
        demo: ["https://odin-cv-builder.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-cv-builder"],
      },
      description: [
        "An interactive CV builder where users can fill in their personal details, education history, and work experience to instantly generate a professional resume.",
        "Each section can be edited at any time, allowing users to update their information and see changes reflected right away.",
        "Built with modern web tools for a smooth, real-time editing experience, making it quick and easy to create a polished CV ready to share."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Vite"],
        backend: [],
        tools: ["Git", "GitHub", "VS Code", "EsLint", "Prettier"],
        testing: [],
      },
    },
    {
      title: "Homepage",
      image: homepage,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-homepage/src/index.html"],
        source: ["https://github.com/AndrewAttemptsCode/odin-homepage"],
      },
      description: [
        "A responsive homepage designed to adapt to desktop, tablet, and mobile screens. The layout showcases a clean structure with sections for an introduction, featured projects, and contact information, styled with modern HTML and CSS techniques.",
        "Built with a focus on flexible design and smooth scaling across devices."
      ],
      techstack: {
        frontend: ["HTML", "CSS"],
        backend: [],
        tools: ["Git", "GitHub", "VS Code"],
        testing: [],
      },
    },
  ]
};

export default projects;
