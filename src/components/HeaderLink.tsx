import styled from 'styled-components';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { HeaderLinkProps } from '../types/CustomType.ts';

const StyledHeaderLink = styled(NavLink)<{ $isActive: boolean }>`
  font-family: 'Roboto', sans-serif;
  color: ${({ $isActive }) => `var(--color-${$isActive ? 'sky' : 'gray-0'})`};
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 200;
  transition: color 0.3s ease-in-out;
  font-size: 1.92rem;

  &:hover {
    color: var(--color-sky);
  }
`;

const HeaderLink: FC<HeaderLinkProps> = ({ to, label }) => {
  const { pathname } = useLocation();

  const routeFromLabel = label.endsWith('S&A')
    ? 'skills'
    : label.slice(5).toLowerCase();

  const isActive = routeFromLabel === pathname.slice(1);

  return (
    <StyledHeaderLink $isActive={isActive} to={to}>
      {label}
    </StyledHeaderLink>
  );
};

export default HeaderLink;
