import styled from "styled-components";

const HeaderStyle = styled.header`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
`

const Header = () => {
  return (
    <HeaderStyle>
      <ResponsiveContainer>
        {/* burger menu
        logo
        nav
        themetoggle */}
      </ResponsiveContainer>
    </HeaderStyle>
  );
};

export default Header;