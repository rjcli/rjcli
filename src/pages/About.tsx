import styled from 'styled-components';

import SubHeader from '../components/SubHeader.tsx';
import { TimelineDateProps as ColoredTextProps } from '../types/CustomType.ts';

const StyledSpan = styled.span`
  font-family: 'Sacramento', cursive;
`;

export const StyledPara = styled.p`
  padding: 0.5rem 0;
  letter-spacing: 2px;
  font-family: 'Poppins', serif;
  font-size: 2rem;
  text-align: justify;
  @media (max-width: 544px) {
    text-align: left;
    font-size: 1.7rem;
  }
  color: var(--color-gray-5);
  font-weight: 200;
  line-height: 2.5;
`;

export const ColoredText = styled.span<ColoredTextProps>`
  color: var(${(props) => '--color-' + (props.color ?? 'sky')});
`;

export const StyledMain = styled.main`
  padding-top: 3vmax;
  width: 70%;
  margin: auto;
  @media (max-width: 600px) {
    padding-top: 6vmax;
    width: 90%;
  }
`;

const About = () => {
  return (
    <StyledMain>
      <SubHeader>00 : About</SubHeader>

      <SubHeader isCentered={false}>
        Hello, I am <StyledSpan>Rashmi Raj</StyledSpan>.
      </SubHeader>

      <StyledPara>
        Currently, I'm doing an <ColoredText>internship at Intel</ColoredText>{' '}
        along with <ColoredText>M. Tech in CSE at IIT Patna</ColoredText>.
      </StyledPara>

      <StyledPara>
        I love thinking about random situations, building stuff, and working on
        challenging problems.
      </StyledPara>

      <StyledPara>
        When I'm not coding, I keep myself busy with watching Sci-Fi Movies,
        reading Comic Books, and playing Badminton.
      </StyledPara>
    </StyledMain>
  );
};

export default About;
