import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import NavBar from "./NavBar";

const HeaderStyle = styled.header`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  position: relative;
`

const Header = () => {
  return (
    <HeaderStyle>
      <ResponsiveContainer>
        <BurgerMenu />
        {/* need nav to work in desktop, use mode on nav and a container */}
        {/* <NavBar /> */}
        {/* logo
        themetoggle */}
      </ResponsiveContainer>
    </HeaderStyle>
  );
};

export default Header;