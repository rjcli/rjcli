import styled from 'styled-components';

import { SubHeaderProps } from '../types/CustomType.ts';

const StyledHeader = styled.div<{ $isCentered: boolean | undefined }>`
  font-size: 3rem;
  @media (max-width: 376px) {
    font-size: 2.4rem;
  }
  letter-spacing: 2px;
  word-spacing: 1px;
  font-weight: 100;
  font-family: 'Roboto', serif;
  color: ${({ $isCentered }) =>
    $isCentered ? 'var(--color-sky)' : 'var(--color-white)'};
  padding: 1rem 0;
  text-align: ${({ $isCentered }) => ($isCentered ? 'center' : 'left')};
  margin-bottom: ${({ $isCentered }) => ($isCentered ? '5rem' : '0.5rem')};
`;

const SubHeader = ({ isCentered, children, ...props }: SubHeaderProps) => {
  return (
    <StyledHeader $isCentered={isCentered} {...props}>
      {children}
    </StyledHeader>
  );
};

StyledHeader.defaultProps = {
  $isCentered: true,
};

export default SubHeader;
