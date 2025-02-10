import styled from 'styled-components';
import type { FC } from 'react';

import { TimelineObj as TimelineItemProps } from '../types/CustomType.ts';

const TimelineListItem = styled.li`
  grid-column: 2;
  --inlineP: 0.96rem;
  --row-gap: 3.2rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;

  &:not(:last-child) {
    margin-bottom: var(--row-gap);
  }

  @media (min-width: 64rem) {
    &:nth-child(odd) {
      grid-column: 1;
    }

    &:nth-child(even) {
      grid-column: 3;
    }

    &:nth-child(2) {
      grid-row: 2/4;
    }

    &:nth-child(odd) .date::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      left: 0;
    }

    &:nth-child(odd) .date::after {
      transform: translate(-50%, -50%);
      left: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }

    &:nth-child(odd) .date {
      border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
    }
  }
`;

const TimelineDate = styled.div<{ color: string }>`
  --dateH: 4.8rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);
  text-align: center;
  background-color: ${({ color }) => color};
  color: var(--color-gray-4);
  font-size: 2rem;
  @media (max-width: 444px) {
    font-size: 1.7rem;
  }
  font-weight: 500;
  display: grid;
  place-content: center;
  position: relative;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);

  &::before {
    content: '';
    width: var(--inlineP);
    aspect-ratio: 1;
    background: ${({ color }) => color};
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
    position: absolute;
    top: 100%;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 3.2rem;
    aspect-ratio: 1;
    background: var(--color-background);
    border: 0.48rem solid ${({ color }) => color};
    border-radius: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    right: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
`;

const TimelineContent = styled.div`
  background: var(--color-black);
  position: relative;
  padding-inline: 1.6rem;
  font-size: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 0.8rem;
    background: var(--color-absolute-black);
    left: 50%;
    border-radius: 50%;
    filter: blur(4px);
    transform: translate(-50%, 50%);
  }
`;

const TimelineTitle = styled(TimelineContent)`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: var(--color-gray-3);
  padding-block-start: 2.4rem;
  padding-block-end: 1.6rem;

  &::before {
    bottom: calc(100% + 0.2rem);
    z-index: -1;
  }
`;

const TimelineDescription = styled(TimelineContent)`
  font-weight: 300;
  color: var(--color-gray-2);
  letter-spacing: 1px;
  word-spacing: 1px;
  padding-block-end: 2.4rem;

  &::before {
    z-index: -1;
    bottom: 0.4rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.6rem;
  }

  li {
    color: var(--color-gray-3);
    margin-bottom: 0.8rem;
  }
`;

const TimelineItem: FC<TimelineItemProps> = ({
  date,
  title,
  description,
  color,
}) => {
  return (
    <TimelineListItem>
      <TimelineDate color={color} className='date'>
        {date}
      </TimelineDate>

      <TimelineTitle>{title}</TimelineTitle>

      <TimelineDescription>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </TimelineDescription>
    </TimelineListItem>
  );
};

export default TimelineItem;
