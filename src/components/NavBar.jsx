import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 34px;
  z-index: 5;
  background: var(--bg-color);
  width: 100dvw;
  padding: 1rem;
  text-align: center;
  transform-origin: top;
  transform: ${({$open}) => ($open ? "translateY(0%)" : "translateY(-150%)")};
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
`
// need to rework this, to work with mobile and desktop... use a mobile/desktop mode and conditionally check with the mode on props
const NavBar = ({open, closeMenu}) => {
  return (
    <Nav $open={open}>
      <ul>
        <li><Link to={"/"} onClick={closeMenu} tabIndex={open ? 0 : -1}>Home</Link></li>
        <li><Link to={"/projects"} onClick={closeMenu} tabIndex={open ? 0 : -1}>Projects</Link></li>
        <li><Link to={"/about"} onClick={closeMenu} tabIndex={open ? 0 : -1}>About</Link></li>
        <li><Link to={"/contact"} onClick={closeMenu} tabIndex={open ? 0 : -1}>Contact</Link></li>
      </ul>
    </Nav>
  );
};

export default NavBar;