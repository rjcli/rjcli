import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header.tsx';

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: var(--color-grey-0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  z-index: 99;

  &:hover {
    background-color: var(--color-resume-bg);
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
