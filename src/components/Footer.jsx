import { Link } from "react-router-dom";
import styled from "styled-components";
import socials from "../utils/socials";

const FooterStyle = styled.footer`
  padding: 1rem 0;
  background-color: rgba(var(--primary-color), 0.06);
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
`

const FooterItem = styled.section`
  margin-bottom: 1rem;

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 0;
    line-height: 2;
    transition: color 0.3s ease;

    &:hover {
      color: rgba(var(--primary-color), 0.7);
    }
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <ResponsiveContainer>
        <FooterItem>
          <h2>Site Nav</h2>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </FooterItem>
        <FooterItem>
          <h2>Projects</h2>
          <ul>
            <li><Link to={"/projects"}>Featured Projects</Link></li>
            <li><Link to={"/projects#learning-archive"}>Learning Archive</Link></li>
          </ul>
        </FooterItem>
        <FooterItem>
          <h2>Connect</h2>
          <ul>
            {socials.map(({ name, url }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </FooterItem>
      </ResponsiveContainer>
    </FooterStyle>
  );
};

export default Footer;