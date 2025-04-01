import styled from 'styled-components';
import { type FC } from 'react';

import { ConnectItemProps } from '../types/CustomType.ts';

const ConnectDiv = styled.div`
  margin: 2rem 0;
  width: 50%;
  padding: 2rem 0;
  box-shadow: 0 0.1rem 1rem var(--color-absolute-black);
  border-radius: 1rem;

  @media (max-width: 908px) {
    width: 100%;
  }
`;

const StyledHref = styled.a`
  font-size: 2rem;
  letter-spacing: 1px;
  color: var(--color-grey-300);
  display: block;
  text-align: center;

  @media (max-width: 444px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--color-sky);
    transition: 0.4s ease-in-out;
  }
`;

const Icon = styled.div`
  font-size: 6rem;
  text-align: center;
`;

const ConnectItem: FC<ConnectItemProps> = ({
  contactTag,
  title,
  icon,
  href,
}) => {
  return (
    <ConnectDiv>
      <Icon className={`${contactTag === 'phone' ? 'rotate-icon' : ''}`}>
        {icon}
      </Icon>
      <StyledHref
        href={href}
        target='_blank'
        style={{ color: contactTag === 'phone' ? 'var(--color-red-700)' : '' }}
      >
        {title}
      </StyledHref>
    </ConnectDiv>
  );
};

export default ConnectItem;
