import { useState } from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import NavBar from "./NavBar";
import HeaderLogo from "./HeaderLogo";
import ThemeToggle from "./ThemeToggle";

const HeaderStyle = styled.header`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderStyle>
      <ResponsiveContainer>
        <BurgerMenu menuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeaderLogo />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <ThemeToggle />
      </ResponsiveContainer>
    </HeaderStyle>
  );
};

export default Header;