import styled from 'styled-components';

import SubHeader from '../components/SubHeader.tsx';
import WorkItem from '../components/WorkItem.tsx';
import { StyledMain } from './About.tsx';
import { workItems } from '../assets/data/db.ts';

const StyledPara = styled.p`
  font-size: 1.5rem;
  text-align: center;

  & a {
    color: var(--color-sky);
    transition: color 0.3s ease;

    &:hover,
    &:active {
      color: var(--color-blue-700);
    }
  }
`;

const Work = () => {
  return (
    <StyledMain>
      <SubHeader>02 : Work</SubHeader>

      <ul>
        {workItems.map((workItem) => (
          <WorkItem key={workItem.title} {...workItem} />
        ))}
      </ul>

      <StyledPara className='center' style={{ fontSize: '1.5rem' }}>
        Looking for more of my work? Visit my{' '}
        <a href='https://github.com/rjcli?tab=repositories' target='_blank'>
          GitHub
        </a>
        .
      </StyledPara>
    </StyledMain>
  );
};

export default Work;
