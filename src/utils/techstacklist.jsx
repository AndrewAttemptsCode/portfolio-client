import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCloudflarepages, SiEslint, SiExpress, SiJest, SiPassport, SiPostgresql, SiPrettier, SiPrisma, SiRailway, SiStyledcomponents, SiTypescript, SiVitest, SiWebpack } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const techstacklist = {
  frontend: [
    {
      title: "HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: <FaHtml5 />
    },
    {
      title: "CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: <FaCss3Alt />
    },
    {
      title: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <IoLogoJavascript />
    },
    {
      title: "React",
      url: "https://react.dev/",
      icon: <FaReact />
    },
    {
      title: "Styled Components",
      url: "https://styled-components.com/",
      icon: <SiStyledcomponents />
    }
  ],
  backend: [
    {
      title: "Node.js",
      url: "https://nodejs.org/",
      icon: <FaNodeJs />
    },
    {
      title: "Express",
      url: "https://expressjs.com/",
      icon: <SiExpress />
    },
    {
      title: "PostgreSQL",
      url: "https://www.postgresql.org/",
      icon: <SiPostgresql />
    },
    {
      title: "Prisma",
      url: "https://www.prisma.io/",
      icon: <SiPrisma />
    },
    {
      title: "Passport.js",
      url: "https://www.passportjs.org/",
      icon: <SiPassport />
    },
    {
      title: "EJS",
      url: "https://ejs.co/",
      icon: <ImEmbed2 />
    }
  ],
  buildTools: [
    {
      title: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: <SiTypescript />
    },
    {
      title: "Vite",
      url: "https://vitejs.dev/",
      icon: <TbBrandVite />
    },
    {
      title: "Webpack",
      url: "https://webpack.js.org/",
      icon: <SiWebpack />
    }
  ],
  testing: [
    {
      title: "Jest",
      url: "https://jestjs.io/",
      icon: <SiJest />
    },
    {
      title: "Vitest",
      url: "https://vitest.dev/",
      icon: <SiVitest />
    },
    {
      title: "SuperTest",
      url: "https://github.com/visionmedia/supertest",
      icon: null
    }
  ],
  versionControl: [
    {
      title: "Git",
      url: "https://git-scm.com/",
      icon: <FaGitAlt />
    },
    {
      title: "GitHub",
      url: "https://github.com/",
      icon: <FaGithub />
    }
  ],
  hosting: [
    {
      title: "Cloudflare Pages",
      url: "https://pages.cloudflare.com/",
      icon: <SiCloudflarepages />
    },
    {
      title: "Railway",
      url: "https://railway.app/",
      icon: <SiRailway />
    }
  ],
  tools: [
    {
      title: "VS Code",
      url: "https://code.visualstudio.com/",
      icon: <VscVscode />
    },
    {
      title: "EsLint",
      url: "https://eslint.org/",
      icon: <SiEslint />
    },
    {
      title: "Prettier",
      url: "https://prettier.io/",
      icon: <SiPrettier />
    }
  ]
}

export default techstacklist;
