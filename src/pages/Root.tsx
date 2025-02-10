import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header.tsx';
import { useScreenSize } from '../context/useScreenSize.ts';

const StyledButton = styled.button<{ $isSmallScreen: boolean }>`
  position: fixed;
  bottom: ${({ $isSmallScreen }) => ($isSmallScreen ? '1rem' : '2rem')};
  right: ${({ $isSmallScreen }) => ($isSmallScreen ? '1rem' : '2rem')};
  padding: 1rem 2rem;
  background-color: var(--color-resume-bg);
  color: var(--color-grey-0);
  border: none;
  cursor: pointer;
  border-bottom-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  font-size: 1.6rem;
  z-index: 99;

  &:hover {
    background-color: var(--color-resume-bg-hover);
  }
`;
const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSmallScreen } = useScreenSize();
  console.log(isSmallScreen);

  const handleShowResume = () => {
    navigate('/resume');
  };

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== '/resume' && (
        <StyledButton onClick={handleShowResume} $isSmallScreen={isSmallScreen}>
          View Resume
        </StyledButton>
      )}
    </>
  );
};

export default Root;
