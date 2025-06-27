import styled from 'styled-components';
import { useState } from 'react';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';
import type { FC } from 'react';

import { WorkItemProps } from '../types/CustomType.ts';

const StyledDiv = styled.div<{ $collapsed: boolean }>`
  margin-bottom: 3rem;
  border-radius: 7px;
  border: 1px solid var(--color-gray-1);
  padding: 0 3rem;
  cursor: pointer;

  @media (max-width: 544px) {
    padding: 0 1rem;
    font-size: 1.5rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewLink = styled.button`
  padding: 0.8rem 1rem;
  font-size: 1.7rem;
  border: 1px solid var(--color-gray-2);
  text-align: center;
  display: block;
  margin: 1rem 0 1rem auto;
  border-radius: 5px;
  background-color: var(--color-black);
  color: var(--color-gray-3);
  text-decoration: none;

  @media (max-width: 544px) {
    font-size: 1.4rem;
  }

  &:active,
  &:hover {
    background: var(--color-absolute-black);
  }
`;

const WorkItemTitle = styled.h1`
  color: var(--color-gray-4);
  font-weight: 400;
  font-size: 2rem;

  @media (max-width: 544px) {
    font-size: 1.3rem;

    & svg {
      font-size: 2rem;
    }
  }
`;

const WorkItemSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1.7rem;
  color: var(--color-gray-3);
  padding: 1rem 0;
  border-top: 1px solid var(--color-gray-1);

  @media (max-width: 544px) {
    font-size: 1.1rem;
  }
`;

const WorkItemDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: justify;
  color: var(--color-gray-2);

  @media (max-width: 544px) {
    font-size: 1rem;
  }
`;

const WorkItem: FC<WorkItemProps> = ({
  title,
  subtitle,
  description,
  link,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <StyledDiv onClick={toggleCollapse} $collapsed={collapsed}>
      <FlexDiv>
        <WorkItemTitle>{title}</WorkItemTitle>
        {collapsed ? (
          <HiMiniChevronUp className='see-more' />
        ) : (
          <HiMiniChevronDown className='see-more' />
        )}
      </FlexDiv>

      {collapsed && (
        <>
          <WorkItemSubtitle>{subtitle}</WorkItemSubtitle>
          <WorkItemDescription>{description}</WorkItemDescription>
          <ViewLink>
            <a href={link} target='_blank' rel='noreferrer'>
              View on GitHub
            </a>
          </ViewLink>
        </>
      )}
    </StyledDiv>
  );
};

export default WorkItem;
