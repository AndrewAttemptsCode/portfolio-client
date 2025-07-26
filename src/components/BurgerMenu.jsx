import styled from "styled-components";

const StyledButton = styled.button`
  height: 2rem;
  aspect-ratio: 1 / 1;
  padding: 0.1rem;
  background: transparent;
  border: 2px solid rgb(var(--primary-color));
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`

const ButtonContent = styled.div`
  position: relative;
  user-select: none;
  height: 2px;
  background: ${({$menuOpen}) => ($menuOpen ? "transparent" : "rgb(var(--primary-color))")}; 
  transition: background 0.3 ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    user-select: none;
    height: 2px;
    width: 100%;
    background: rgb(var(--primary-color));
    transition: transform 0.3s ease;
  }

  &::before {
    transform: ${({$menuOpen}) => ($menuOpen ? "rotate(45deg)" : "translateY(-6px)")};
  }

  &::after {
    transform: ${({$menuOpen}) => ($menuOpen ? "rotate(-45deg)" : "translateY(6px)")};
  }
`

const BurgerMenu = ({menuOpen, setIsMenuOpen}) => {
  
  return (
    <StyledButton
      onClick={() => setIsMenuOpen(prev => !prev)}
      aria-label="Toggle Navigation"
      aria-expanded={menuOpen}
    >
      <ButtonContent $menuOpen={menuOpen} />
    </StyledButton>
  );
};

export default BurgerMenu;