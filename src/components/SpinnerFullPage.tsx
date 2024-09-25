import styled from 'styled-components';

import Spinner from './Spinner.tsx';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SpinnerFullPage = () => {
  return (
    <StyledDiv>
      <Spinner />
    </StyledDiv>
  );
};

export default SpinnerFullPage;
