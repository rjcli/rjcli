import styled from 'styled-components';

import { TimelineProps } from '../types/CustomType.ts';
import TimelineItem from './TimelineItem.tsx';

const TimelineDiv = styled.div`
  display: grid;
  align-content: center;
  gap: 3.2rem;
`;

const TimelineList = styled.ul`
  --col-gap: 3.2rem;
  --line-w: 0.4rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(96rem, 95%);
  margin-inline: auto;
  margin-bottom: 2.5rem;

  &::before {
    content: '';
    grid-column: 1;
    grid-row: 1 / span 20;
    background: var(--color-background);
    border-radius: calc(var(--line-w) / 2);
  }

  @media (min-width: 64rem) {
    grid-template-columns: 1fr var(--line-w) 1fr;

    &::before {
      grid-column: 2;
    }
  }
`;

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <TimelineDiv>
      <TimelineList>
        {experiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </TimelineList>
    </TimelineDiv>
  );
};

export default Timeline;
