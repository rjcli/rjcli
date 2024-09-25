import styled from 'styled-components';

import { SkillListProps } from '../types/CustomType.ts';

const StyledList = styled.ul`
  margin-bottom: 7rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    gap: 1.5rem;
  }
`;

const StyledListItem = styled.li`
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
  box-shadow: 0 0 1rem var(--color-absolute-black);
  border-radius: 1rem;
  text-align: center;
`;

const StyledSpan = styled.span`
  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  color: var(--color-cyan);
`;

const StyledPara = styled.p`
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  color: var(--color-gray-5);
  margin-top: -1rem;
`;

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <StyledList>
      {skills.map((skill) => (
        <StyledListItem key={skill.title}>
          <StyledSpan>{skill.icon}</StyledSpan>
          <StyledPara>{skill.title}</StyledPara>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default SkillList;
