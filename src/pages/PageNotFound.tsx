import styled from 'styled-components';

import Button from '../components/Button.tsx';
import SubHeader from '../components/SubHeader.tsx';
import { ColoredText } from './About.tsx';

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  flex-direction: column;
`;

const StyledSubHeader = styled(SubHeader)`
  font-size: 2rem;
`;

const PageNotFound = () => {
  return (
    <StyledMain>
      <StyledSubHeader
        className='center'
        isCentered={false}
        style={{ fontSize: '2rem' }}
      >
        The Route you request doesn't exist. <br />
        Looks like you are lost. <br />
      </StyledSubHeader>
      <StyledSubHeader>
        <ColoredText color='red'>404 Error</ColoredText> <br />
      </StyledSubHeader>
      <Button to='about'>Back to Home</Button>
    </StyledMain>
  );
};

export default PageNotFound;
