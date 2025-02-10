import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ButtonLinkProps, ButtonProps } from '../types/CustomType.ts';

const isRouterLink = (
  props: ButtonLinkProps | ButtonProps,
): props is ButtonLinkProps => {
  return 'to' in props;
};

const StyledButton = styled.button`
  font-size: 2rem;
  color: var(--color-blue);
  padding: 2rem 3rem;
  border-radius: 7px;
  border: 0.3px solid var(--color-grey-400);
  background-color: inherit;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue);
    transition: all 0.4s ease-in-out;
  }
`;

const Button = (props: ButtonProps | ButtonLinkProps) => {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;

    return (
      <StyledButton>
        <Link
          className={`button ${textOnly ? 'button--text-only' : ''}`}
          {...otherProps}
        >
          {children}
        </Link>
      </StyledButton>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <StyledButton
      className={`button ${textOnly ? 'button--text-only' : ''}`}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
