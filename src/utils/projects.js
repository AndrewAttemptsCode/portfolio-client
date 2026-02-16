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
import battleshipApp from "../assets/battleship_app.webp";
import weatherforecastApp from "../assets/weatherforecast_app.webp";
import todoApp from "../assets/todolist_app.webp";
import restaurantApp from "../assets/restaurant_app.webp";
import ticTacToeApp from "../assets/tictactoe_app.webp";
import bookLibraryApp from "../assets/booklibrary_app.webp";
import dashboardApp from "../assets/dashboard_app.webp";
import signupFormApp from "../assets/signupform_app.webp";
import calculatorApp from "../assets/calculator_app.webp";
import etchasketchApp from "../assets/etchasketch_app.webp";
import rockPaperScissorsApp from "../assets/rockpaperscissors_app.webp";
import landingPageApp from "../assets/landingpage_app.webp";
import recipesApp from "../assets/recipes_app.webp";
import portfolioApp from "../assets/portfolio_app.webp";
import clickerApp from "../assets/clicker_app.webp";
import workoutApp from "../assets/workout_app.webp";
import postyApp from "../assets/posty_app.webp";

const projects = {
  featured: [
    {
      title: "Posty CMS App",
      image: postyApp,
      links: {
        demo: ["https://posts-headless-cms.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/posts-headless-cms"],
      },
      description: [
        "Posty is a headless CMS web app built to showcase front-end skills — including React, TypeScript, client-side routing, API integration, and responsive, accessible design.",
        "It displays the latest posts from a Contentful API and lets users navigate to individual articles. Selecting a post uses client-side routing, while direct URL slugs dynamically fetch and render the correct content.",
        "The app demonstrates modern front-end architecture with a decoupled data flow: API → custom hooks → components. Tailwind CSS ensures responsive, accessible, and maintainable interfaces."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        backend: [],
        buildTools: ["TypeScript", "Vite"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Cloudflare Pages"],
        tools: ["VS Code", "Prettier", "Contentful"],
      },
    },
    {
      title: "Workout App",
      image: workoutApp,
      links: {
        demo: ["https://workout-app-511.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/workout-app"],
      },
      description: [
        "Storm Lifts is a web-based workout application built to practice and showcase front-end development skills — including React, TypeScript, accessibility, testing, and responsive design.",
        "The idea came from my own workouts: I kept losing track of which set I was on during each exercise. This app solves that problem by tracking everything for you — you can create exercises, build workouts, and run them using a built-in timer.",
        "The app uses LocalStorage to store all workout data, providing a convenient offline experience with no need for an internet connection after the app is loaded."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components"],
        backend: [],
        buildTools: ["TypeScript", "Vite"],
        testing: ["Vitest"],
        versionControl: ["Git", "GitHub"],
        hosting: ["Cloudflare Pages"],
        tools: ["VS Code"],
      },
    },
    {
      title: "The Clicker App",
      image: clickerApp,
      links: {
        demo: ["https://the-clicker.pages.dev/"],
        source: ["https://github.com/AndrewAttemptsCode/the-clicker"],
      },
      description: [
        "The Clicker is a React application built to practice TypeScript, focusing on type inference as well as explicit typing for functional component props and styled-components prop interpolations.",
        "It features a responsive interface styled with Styled Components, where clicking the main button increments a counter.",
        "Additional buttons unlock every 100 clicks (up to 600), allowing players to increase the count more quickly while exploring the app’s interactive behaviour."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components"],
        backend: [],
        buildTools: ["TypeScript", "Vite"],
        testing: ["Vitest"],
        versionControl: ["Git", "GitHub"],
        hosting: ["Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
      },
    },
    {
      title: "Portfolio App",
      image: portfolioApp,
      links: {
        demo: ["https://andrewtravis.uk"],
        source: ["https://github.com/AndrewAttemptsCode/portfolio-client", "https://github.com/AndrewAttemptsCode/portfolio-server"],
      },
      description: [
        "My portfolio website is a React-based application styled with Styled Components, where visitors can explore my projects, view details that update dynamically when selected, and send me a message through the contact form.",
        "Interactivity is handled using modern web tools, making the app fast and responsive.",
        "The backend is powered by an Express server, which uses Nodemailer to securely deliver contact form submissions to my email."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components"],
        backend: ["Node.js", "Express"],
        buildTools: ["Vite"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway", "Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
      },
    },
  ],
  archive: [
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
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Passport.js"],
        buildTools: ["Vite"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway", "Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
      },
    },
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
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Passport.js"],
        buildTools: ["Vite"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway", "Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
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
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway"],
        tools: ["VS Code", "Prettier"],
      },
    },
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
        buildTools: [],
        testing: ["Jest", "SuperTest"],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway", "Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
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
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway"],
        tools: ["VS Code", "Prettier"],
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
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway"],
        tools: ["VS Code", "Prettier"],
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
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Railway"],
        tools: ["VS Code", "Prettier"],
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
        frontend: ["HTML", "CSS", "JavaScript", "React", "Styled Components"],
        backend: [],
        buildTools: ["Vite"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
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
        frontend: ["HTML", "CSS", "JavaScript", "React"],
        backend: [],
        buildTools: ["Vite"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
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
        buildTools: ["Vite"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: ["Cloudflare Pages"],
        tools: ["VS Code", "Prettier"],
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
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Battleship",
      image: battleshipApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-battleship/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-battleship"],
      },
      description: [
        "An interactive Battleship game where you try to sink all of the computer’s ships before it sinks yours. Players take turns choosing spots to attack, with the game tracking hits, misses, and when ships are sunk.",
        "Built step-by-step with tests to make sure the game logic works perfectly, then finished with an interface for playing directly in the browser."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: ["Webpack"],
        testing: ["Jest"],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Weather Forecast",
      image: weatherforecastApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-weatherapp/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-weatherapp"],
      },
      description: [
        "A weather app where you can search for any location and see the current forecast, with the option to view temperatures in either Celsius or Fahrenheit.",
        "The page updates based on the weather, adding a visual touch to match the conditions.",
        "Powered by live weather data from an external API, the app fetches and displays the latest information instantly, making it quick and easy to check the forecast."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: ["Webpack"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code", "Prettier"],
      },
    },
    {
      title: "ToDo List",
      image: todoApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-todo-list/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-todo-list"],
      },
      description: [
        "A customizable to-do list app where you can create tasks with titles, descriptions, due dates, and priorities, and organize them into different projects. Tasks can be edited, marked as complete, or deleted, giving full control over your schedule.",
        "The app saves your projects and tasks in your browser’s storage, so your list stays intact even after refreshing the page."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: ["Webpack"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Restaurant Page",
      image: restaurantApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-restaurant-page/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-restaurant-page"],
      },
      description: [
        "A dynamic restaurant website where every part of the page, from the homepage to the menu and contact sections is generated entirely with JavaScript.",
        "Users can switch between sections using tabbed navigation, and the content updates instantly without reloading the page."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: ["Webpack"],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Tic Tac Toe",
      image: ticTacToeApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-tictactoe/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-tictactoe"],
      },
      description: [
        "Tic Tac Toe game where two players take turns marking spaces on a 3×3 grid, aiming to get three in a row before their opponent. The game detects wins, ties, and prevents moves on already-filled spots.",
        "Players can enter their names, start or restart the game, and see the results instantly on a clean, interactive board."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: [],
        hosting: [],
        tools: ["Git", "GitHub", "VS Code"],
      },
    },
    {
      title: "Book Library",
      image: bookLibraryApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-library/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-library"],
      },
      description: [
        "A small app to keep track of books you own. You can add new books with details like title, author, pages, and whether you’ve read them or not. All books are stored in a list you can view and update.",
        "You can see your books displayed on the page, remove any book, or change its read status with just a click. The app keeps everything organized by using unique IDs to manage each book separately."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Admin Dashboard",
      image: dashboardApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-admin-dashboard/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-admin-dashboard"],
      },
      description: [
        "A clean and organized dashboard webpage that uses CSS Grid to arrange different sections like a sidebar, header, and main content area. The layout helps display navigation, user info, projects, and announcements clearly and neatly."
      ],
      techstack: {
        frontend: ["HTML", "CSS"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Signup Form",
      image: signupFormApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-signup-form/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-signup-form"],
      },
      description: [
        "A stylish sign-up page for a fictional service featuring a large background image, custom fonts, and clear form fields for users to create an account. The design highlights important areas like the logo and the ‘Create Account’ button with color and transparency for easy readability.",
        "The form includes basic visual cues—like colored borders—to show when inputs are focused or invalid, helping users fill it out correctly."
      ],
      techstack: {
        frontend: ["HTML", "CSS"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Calculator",
      image: calculatorApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-calculator/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-calculator"],
      },
      description: [
        "A fully functional on-screen calculator built with JavaScript, HTML, and CSS. It lets users perform basic math operations like addition, subtraction, multiplication, and division, one step at a time."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Etch-a-Sketch",
      image: etchasketchApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-etchasketch/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-etchasketch"],
      },
      description: [
        "A browser-based Etch-a-Sketch toy created with JavaScript and Flexbox. It displays a grid of squares that change color when you select a cell or drag over them, letting you draw by moving the mouse.",
        "You can also set the grid size dynamically, creating a new drawing area up to 100 squares per side and randomized colour mode."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Rock Paper Scissors",
      image: rockPaperScissorsApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-rockpaperscissor/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-rockpaperscissor"],
      },
      description: [
        "Rock Paper Scissors game built with JavaScript. The player competes against the computer, which picks rock, paper, or scissors at random. The game plays five rounds, keeps track of scores, and announces the winner at the end."
      ],
      techstack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Landing Page",
      image: landingPageApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-landing-page/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-landing-page"],
      },
      description: [
        "A simple introduction landing web page, discovering the use of HTML and CSS with the use of Flexbox design."
      ],
      techstack: {
        frontend: ["HTML", "CSS"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
    {
      title: "Recipes",
      image: recipesApp,
      links: {
        demo: ["https://andrewattemptscode.github.io/odin-recipes/"],
        source: ["https://github.com/AndrewAttemptsCode/odin-recipes"],
      },
      description: [
        "My first web application.",
        "Demonstrates fundamental HTML and CSS skills, showcasing the basics of building a website."
      ],
      techstack: {
        frontend: ["HTML", "CSS"],
        backend: [],
        buildTools: [],
        testing: [],
        versionControl: ["Git", "GitHub"],
        hosting: [],
        tools: ["VS Code"],
      },
    },
  ]
};

export default projects;
