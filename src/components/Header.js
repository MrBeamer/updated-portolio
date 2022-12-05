import * as React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import desktopImg from "../images/image-profile-desktop.webp";
import patterRings from "../images/pattern-rings.svg";
import patterCircle from "../images/pattern-circle.svg";

const HeroHeader = styled.header`
  display: grid;
  flex-direction: column;
  max-width: 1110px;
  margin: 0 auto 104px auto;
  position: relative;
`;

const HeroContent = styled.div`
  grid-column: 1/3;
  grid-row: 2;
  z-index: 1;
`;

const HeroHeadline = styled.h1`
  font-weight: 700;
  font-size: 88px;
  line-height: 88px;
  letter-spacing: -2.5px;
  max-width: 793px;
`;

const Highlight = styled.span`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 90%;
    width: 100%;
    left: 0;
    height: 5px;
    background: linear-gradient(90deg, #4ee1a0 0%, #4ee1a0 100%);
  }
`;

const HeroText = styled.p`
  margin-top: 43px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #d9d9d9;
  max-width: 445px;
  margin-bottom: 66px;
`;

const HeroLink = styled(AnchorLink)`
  position: relative;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    top: 130%;
    width: 100%;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, #4ee1a0 0%, #4ee1a0 100%);
  }
`;

const HeroImage = styled.img`
  height: 700px;
  max-width: 445px;

  grid-row: 1/4;
  grid-column: 2;
  justify-self: flex-end;
`;

const PatternRings = styled.img`
  height: 129px;
  max-width: 530px;
  ${
    "" /* position: absolute;
  top: -9%;
  left: -24%; */
  }

  grid-column: 1;
  grid-row: 1;
  align-self: flex-end;
  margin-left: -266px;
  margin-bottom: -64px;
`;

const PatternCircle = styled.img``;

const Header = ({ children }) => {
  return (
    <HeroHeader>
      {children}
      <HeroContent>
        <HeroHeadline>
          Nice to meet you! I’m <Highlight>Michael Beamer</Highlight>.
        </HeroHeadline>
        <HeroText>
          Based in the Germany, I’m a front-end engineer passionate about
          building accessible web apps that users love.
        </HeroText>
        <HeroLink to="/#contact" title="Contact me">
          Contact me
        </HeroLink>
      </HeroContent>
      <PatternRings alt="Pattern consisting of Rings" src={patterRings} />
      <HeroImage alt="Image of Michael Beamer" src={desktopImg} />
    </HeroHeader>
  );
};

export default Header;
{
  /* <PatternCircle alt="Pattern consisting of a Circle" src={patterCircle} /> */
}
