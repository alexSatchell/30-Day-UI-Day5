import React from 'react';
import styled from 'styled-components';

import AliveStageWorship from '../images/alive-stage-worship.png';

const HeroContainer = styled.div`
  width: 100%;
  height: 600px;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);

  padding: 20px;
`;

const ImageContainer = styled.img`
  grid-column: 4 / 8;
  grid-row: 2 / 6;
  /* margin-left: -20px; */
  width: 611px;
  height: 439px;
  z-index: -1;
  object-fit: cover;
`;

const HeroHeader = styled.h1`
  grid-row: 2;
  grid-column: 2 / 5;
  height: max-content;
  width: max-content;
  font-size: 36px;
  letter-spacing: 0.25em;
  font-weight: 500;
  border-bottom: 3px solid #ffde00;
  margin-top: 40px;
`;

const Span = styled.span`
  color: #fff;
`;

const ParagraphContainer = styled.div`
  grid-row: 3 / 6;
  grid-column: 2 / 4;
  display: flex;
  align-items: left;
  justify-content: center;
  padding: 10px;

  flex-direction: column;
`;

const HeroStory = styled.p`
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
`;

const AboutLink = styled.a`
  margin-top: 20px;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #111;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        WE CHANGE <Span>LIVES</Span>
      </HeroHeader>
      <ParagraphContainer>
        <HeroStory>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          bibendum et mauris et tempus.
        </HeroStory>
        <AboutLink href='#'>Learn More</AboutLink>
      </ParagraphContainer>
      <ImageContainer src={AliveStageWorship} />
    </HeroContainer>
  );
};

export default Hero;
