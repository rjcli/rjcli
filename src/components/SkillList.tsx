import styled from 'styled-components';

import { SkillListProps } from '../types/CustomType.ts';

const StyledList = styled.ul`
  margin-bottom: 7rem;
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledListItem = styled.li`
  padding-bottom: 1rem;
  box-shadow: 0 0 1rem var(--color-absolute-black);
  border-radius: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 5rem;
  color: var(--color-cyan);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledPara = styled.p`
  font-size: 1.6rem;
  color: var(--color-gray-5);
  margin-top: -1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
