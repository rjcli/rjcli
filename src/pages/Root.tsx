import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header.tsx';

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: var(--color-resume-bg);
  color: var(--color-grey-0);
  border: none;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 16px;
  z-index: 99;

  &:hover {
    background-color: var(--color-resume-bg-hover);
  }
`;
const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowResume = () => {
    navigate('/resume');
  };

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== '/resume' && (
        <StyledButton onClick={handleShowResume}>View Resume</StyledButton>
      )}
    </>
  );
};

export default Root;
