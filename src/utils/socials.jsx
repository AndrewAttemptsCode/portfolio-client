import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/AndrewAttemptsCode",
    icon: <FaGithub />
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: <FaLinkedin />
  },
  {
    name: "Email",
    url: "mailto:andrewattemptscode@gmail.com",
    icon: <Mail />
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1dJ1fNFXBwB1sdqk_rlAr4Y7Va_Td2UEV/view",
    icon: <FileText />
  },
];

export default socials;
