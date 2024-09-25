import styled from 'styled-components';

import { ContactItemProps } from '../types/CustomType.ts';

const ContactDiv = styled.div`
  margin: 2rem 0;
  width: 50%;
  @media (max-width: 908px) {
    width: 100%;
  }
  padding: 2rem 0;
  box-shadow: 0 0 3.2rem var(--color-absolute-black);
  border-radius: 1rem;
`;

const StyledHref = styled.a`
  font-size: 2rem;
  @media (max-width: 444px) {
    font-size: 1.5rem;
  }
  letter-spacing: 1px;
  color: var(--color-grey-400);
  display: block;
  text-align: center;

  &:hover {
    color: var(--color-sky);
    transition: 0.4s ease-in-out;
  }
`;

const Icon = styled.div`
  font-size: 6rem;
  text-align: center;
`;

const ContactItem = ({ contactTag, title, icon, href }: ContactItemProps) => {
  return (
    <ContactDiv>
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
    </ContactDiv>
  );
};

export default ContactItem;
