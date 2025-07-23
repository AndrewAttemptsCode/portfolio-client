import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

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
        {/* logo
        nav
        themetoggle */}
      </ResponsiveContainer>
    </HeaderStyle>
  );
};

export default Header;