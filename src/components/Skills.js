import * as React from "react";
import styled from "styled-components";

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-top: 52px;
  row-gap: 58px;
  column-gap: 30px;

  @media only screen and (max-width: 767px) {
    justify-items: center;
    text-align: center;
  }
`;

const SkillItem = styled.div``;

const SkillHeadline = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1.5px;
  margin-bottom: 14px;
`;

const SkillText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #d9d9d9;
`;

const Skills = () => {
  return (
    <SkillGrid>
      <SkillItem>
        <SkillHeadline>HTML</SkillHeadline>
        <SkillText>4 Years Experiences</SkillText>
      </SkillItem>
      <SkillItem>
        <SkillHeadline>CSS</SkillHeadline>
        <SkillText>4 Years Experiences</SkillText>
      </SkillItem>
      <SkillItem>
        <SkillHeadline>JavaScript</SkillHeadline>
        <SkillText>4 Years Experiences</SkillText>
      </SkillItem>
      <SkillItem>
        <SkillHeadline>Accessibility</SkillHeadline>
        <SkillText>4 Years Experiences</SkillText>
      </SkillItem>
      <SkillItem>
        <SkillHeadline>React</SkillHeadline>
        <SkillText>4 Years Experiences</SkillText>
      </SkillItem>
      <SkillItem>
        <SkillHeadline>SAAS</SkillHeadline>
        <SkillText>4 Years Experiences</SkillText>
      </SkillItem>
    </SkillGrid>
  );
};

export default Skills;
