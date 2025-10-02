import styled from 'styled-components';

import SubHeader from '../components/SubHeader.tsx';

const StyledSpan = styled.span`
  font-family: 'Sacramento', cursive;
  font-size: 4rem;
`;

const HighlightedText = styled.span`
  border-bottom: 1px solid var(--color-animation-2);
  padding: 0 3px;
  border-radius: 4px;
  color: var(--color-white);
`;

export const StyledPara = styled.p`
  padding: 0.5rem 0;
  font-family: 'Poppins', serif;
  font-size: 2rem;
  text-align: justify;
  color: var(--color-gray-5);
  font-weight: 200;
  line-height: 2.5;

  @media (max-width: 544px) {
    text-align: left;
    font-size: 1.7rem;
  }
`;

export const AnimationText = styled.span`
  background: radial-gradient(
    circle,
    var(--color-animation-1),
    var(--color-animation-2)
  );
  background-clip: text;
  color: transparent;
  animation: textHighlight 15s linear infinite;
  background-size: 200% 200%;

  @keyframes textHighlight {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 200% 200%;
    }
  }
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
        Hi, I am{' '}
        <StyledSpan>
          <AnimationText>Rashmi Raj</AnimationText>
        </StyledSpan>
        .
      </SubHeader>

      <StyledPara>
        I&apos;m a{' '}
        <HighlightedText>
          Senior Software Engineer I at HCLSoftware
        </HighlightedText>{' '}
        .
      </StyledPara>

      <StyledPara>
        I&apos;m passionate about exploring new ideas, building cool things, and
        tackling tough challenges.
      </StyledPara>

      <StyledPara>
        When I&apos;m not diving into code, you&apos;ll probably find me
        watching Sci-Fi movies, getting lost in comic books, or hitting the
        badminton court.{' '}
      </StyledPara>
      <StyledPara>
        Feel free to connect &#x2E3A; I&apos;m always up for a good chat!
      </StyledPara>
    </StyledMain>
  );
};

export default About;
