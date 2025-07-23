import { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const StyledButton = styled.button`
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  height: 2rem;
  aspect-ratio: 1 / 1;
  padding: 0.1rem;
  background: transparent;
  border: 2px solid var(--primary-font-color);
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`

const ButtonContent = styled.div`
  position: relative;
  user-select: none;
  height: 2px;
  background: ${({$open}) => ($open ? "transparent" : "var(--primary-font-color)")}; 
  transition: background 0.3 ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    user-select: none;
    height: 2px;
    width: 100%;
    background: var(--primary-font-color);
    transition: transform 0.3s ease;
  }

  &::before {
    transform: ${({$open}) => ($open ? "rotate(45deg)" : "translateY(-6px)")};
  }

  &::after {
    transform: ${({$open}) => ($open ? "rotate(-45deg)" : "translateY(6px)")};
  }
`

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledButton
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Toggle Navigation"
        aria-expanded={isOpen}
      >
        <ButtonContent $open={isOpen} />
      </StyledButton>
      {/* use mobile mode here */}
      <NavBar open={isOpen} closeMenu={() => setIsOpen(false)} />
    </>
  );
};

export default BurgerMenu;