import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { HeaderLinkProps } from '../types/CustomType.ts';

const StyledHeaderLink = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  color: var(--color-gray-4);
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 200;
  transition: color 0.3s ease-in-out;
  font-size: 1.92rem;

  &:hover {
    color: var(--color-sky);
  }

  &.active {
    color: var(--color-gray-4);
  }
`;

const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  return <StyledHeaderLink to={to}>{children}</StyledHeaderLink>;
};

export default HeaderLink;
