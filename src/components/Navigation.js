import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Logo = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.444444px;
`;

const Nav = styled.nav`
  ${
    "" /* max-width: 1110px;
  margin: 39px auto 0 auto; */
  }
  display: flex;
  justify-content: space-between;
  margin: 29px 0 127px 0;

  grid-column: 1/3;
  grid-row: 1;
  z-index: 1;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    row-gap: 30px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  column-gap: 32px;
  align-items: center;
  margin-right: 29px;
`;

const NavLinkItem = styled.li``;

const NavLinkText = styled.a`
  text-decoration: none;
  &:hover {
    filter: invert(76%) sepia(52%) saturate(289%) hue-rotate(95deg)
      brightness(333%) contrast(91%);
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo>michaelbeamer</Logo>
      <NavLinks>
        <NavLinkItem>
          <NavLinkText href="https://github.com/MrBeamer">
            <StaticImage
              alt="github cat logo"
              src="../images/icon-github.svg"
            />
          </NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText href="www.linkedin.com/in/michael-beamer">
            <StaticImage
              alt="linkedin logo"
              src="../images/icon-linkedin.svg"
            />
          </NavLinkText>
        </NavLinkItem>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
