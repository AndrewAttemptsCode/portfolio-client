import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const FadeOnSelect = keyframes`
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`

const StyledButton = styled.button`
  height: 2rem;
  aspect-ratio: 1 / 1;
  padding: 0.1rem;
  background-color: transparent;
  border: 2px solid rgb(var(--primary-color));
  z-index: 10;
  cursor: pointer;

  svg {
    color: rgb(var(--primary-color));
    object-fit: contain;
    ${({$themeToggled}) => 
      $themeToggled &&
    css`
      animation: ${FadeOnSelect} 1s ease forwards;
    `}
  }
`

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [themeToggled, setThemeToggled] = useState(false);

  const toggleTheme = () => {
    setThemeToggled(true);
    setTheme((prev) => prev === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }

  }, [theme]);

  useEffect(() => {
    if (themeToggled) {
      const timeout = setTimeout(() => {
        setThemeToggled(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [themeToggled]);

  return (
    <StyledButton
      onClick={toggleTheme}
      $themeToggled={themeToggled}
      aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Sun key="sun" /> : <Moon key="moon" />}
    </StyledButton>
  );
};

export default ThemeToggle;