import { Eye, Proportions, RefreshCcw, TrendingUp } from "lucide-react";
import { BsSpeedometer2 } from "react-icons/bs";

const targets = [
  {
    title: "Responsive Design",
    description: "Mobile first design, optimized layouts across all screen sizes.",
    icon: <Proportions />
  },
  {
    title: "Performance",
    description: "Fast and smooth load time interactions.",
    icon: <BsSpeedometer2 />
  },
  {
    title: "User Experience",
    description: "Accessible, intuitive and reuseable interfaces.",
    icon: <RefreshCcw />
  },
  {
    title: "Accessibility",
    description: "WCAG compliant practices for inclusive design.",
    icon: <Eye />
  },
  {
    title: "Maintainable code",
    description: "Clean structure, that scales with projects.",
    icon: <TrendingUp />
  }
];

export default targets;