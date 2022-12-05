import * as React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import desktopImg from "../images/image-profile-desktop.webp";
import mobileImg from "../images/image-profile-mobile.webp";
import tabletImg from "../images/image-profile-tablet.webp";

import patterRings from "../images/pattern-rings.svg";

const HeroHeader = styled.header`
  display: grid;
  flex-direction: column;
  max-width: 1110px;
  margin: 0 auto 104px auto;
  position: relative;

  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  grid-column: 1/3;
  grid-row: 2;
  z-index: 1;

  @media only screen and (max-width: 640px) {
    grid-column: 1;
    grid-row: 3/3;
    margin-top: 40px;
    text-align: center;
  }
`;

const HeroHeadline = styled.h1`
  font-weight: 700;
  font-size: 88px;
  line-height: 88px;
  letter-spacing: -2.5px;
  max-width: 793px;

  @media only screen and (max-width: 768px) {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -2.04545px;
    max-width: 445px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -1.13636px;
  }
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

  @media only screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 30px;
  }
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
  width: 445px;
  height: auto;

  grid-row: 1/4;
  grid-column: 2;
  justify-self: flex-end;

  @media only screen and (max-width: 768px) {
    width: 322px;
    height: auto;
  }

  @media only screen and (max-width: 640px) {
    grid-row: 1/3;
    grid-column: 1;
    justify-self: center;
    width: 174px;
    height: auto;
  }
`;

const HeroFrame = styled.picture`
  height: auto;

  grid-row: 1/4;
  grid-column: 2;
  justify-self: flex-end;

  @media only screen and (max-width: 640px) {
    grid-row: 1/3;
    grid-column: 1;
    justify-self: center;
    width: 174px;
    height: auto;
  }
`;

const PatternRings = styled.img`
  height: 129px;
  max-width: 530px;

  grid-column: 1;
  grid-row: 1;
  align-self: flex-end;
  margin-left: -266px;
  margin-bottom: -64px;

  @media only screen and (max-width: 640px) {
    margin-left: -369px;
    margin-bottom: -23px;
  }
`;

const Header = ({ children }) => {
  return (
    <HeroHeader>
      {children}
      <HeroContent>
        <HeroHeadline>
          Nice to meet you! I’m
          <Highlight> Adam Keyes</Highlight>.
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
      <HeroFrame>
        <source media="(max-width: 640px)" srcset={mobileImg} />
        <source media="(max-width: 760px)" srcset={tabletImg} />
        <HeroImage
          src={desktopImg}
          alt="Chris standing up holding his daughter Elva"
        />
      </HeroFrame>
    </HeroHeader>
  );
};

export default Header;

{
  /* <HeroImage>
<source media="(max-width: 1440px)" srcSet={desktopImg} />
<source media="(max-width: 768px)" srcSet={tabletImg} />
<img src={mobileImg} alt="profile" />
</HeroImage> */
}
