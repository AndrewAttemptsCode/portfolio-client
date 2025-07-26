import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  left: 50%;
  top: calc(100% + 1rem);
  z-index: 5;
  background-color: rgb(var(--bg-color));
  width: 100vw;
  padding: 1rem;
  text-align: center;
  transform-origin: top;
  transform: ${({$menuOpen}) => ($menuOpen ? "translate(-50%, 0%)" : "translate(-50%, -150%)")};
  transition: transform 0.3s ease;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    padding: 1rem;
  }

  li a {
    text-decoration: none;
    color: inherit;
  }

  li a.active {
    border-bottom: 2px solid rgb(var(--primary-color));
  }
`

const NavBar = ({menuOpen, closeMenu}) => {

  const handleOnClick = () => {
    if (menuOpen) {
      closeMenu();
    };
  };

  return (
    <Nav $menuOpen={menuOpen}>
      <ul>
        <li><NavLink to={"/"} onClick={handleOnClick} tabIndex={menuOpen ? 0 : -1}>Home</NavLink></li>
        <li><NavLink to={"/projects"} onClick={handleOnClick} tabIndex={menuOpen ? 0 : -1}>Projects</NavLink></li>
        <li><NavLink to={"/about"} onClick={handleOnClick} tabIndex={menuOpen ? 0 : -1}>About</NavLink></li>
        <li><NavLink to={"/contact"} onClick={handleOnClick} tabIndex={menuOpen ? 0 : -1}>Contact</NavLink></li>
      </ul>
    </Nav>
  );
};

export default NavBar;