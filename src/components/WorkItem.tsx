import styled from 'styled-components';
import { useState } from 'react';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';

import { WorkItemProps } from '../types/CustomType.ts';

const StyledDiv = styled.div<{ $collapsed: boolean }>`
  margin-bottom: 3rem;
  border-radius: 7px;
  border: 1px solid var(--color-gray-1);
  padding: 0 3rem;
  @media (max-width: 544px) {
    padding: 0 1rem;
    font-size: 1.5rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const ViewLink = styled.button`
  padding: 0.8rem 1rem;
  font-size: 1.7rem;
  @media (max-width: 544px) {
    font-size: 1.4rem;
  }
  border: 1px solid var(--color-gray-2);
  text-align: center;
  display: block;
  margin: 1rem 0 1rem auto;
  border-radius: 5px;
  background-color: var(--color-black);
  color: var(--color-gray-3);

  &:active,
  &:hover {
    background: var(--color-absolute-black);
  }
`;

const WorkItemTitle = styled.h1`
  color: var(--color-gray-4);
  letter-spacing: 1px;
  word-spacing: 1px;
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
  letter-spacing: 1px;
  word-spacing: 1px;
  font-size: 1.7rem;
  @media (max-width: 544px) {
    font-size: 1.1rem;
  }
  color: var(--color-gray-3);
  padding-bottom: 1rem;
  border-top: 1px solid var(--color-gray-1);
  padding-top: 1rem;
`;

const WorkItemDescription = styled.p`
  font-size: 1.5rem;
  @media (max-width: 544px) {
    font-size: 1rem;
  }
  font-weight: 300;
  letter-spacing: 1px;
  text-align: justify;
  color: var(--color-gray-2);
`;

const StyledLine = styled.span`
  width: 1px;
  color: #fff;
`;

const WorkItem = ({ title, subtitle, description, link }: WorkItemProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <StyledDiv onClick={toggleCollapse} $collapsed={collapsed}>
      <WorkItemTitle>
        <FlexDiv>
          {title}
          {collapsed ? (
            <HiMiniChevronUp className='see-more' />
          ) : (
            <HiMiniChevronDown className='see-more' />
          )}
        </FlexDiv>
      </WorkItemTitle>

      {collapsed && (
        <>
          <StyledLine />
          <WorkItemSubtitle>{subtitle}</WorkItemSubtitle>
          <WorkItemDescription>{description}</WorkItemDescription>
          <ViewLink>
            <a href={link} target='_blank'>
              <FaGithub size='1.4rem' className='mt-5' />
              <span className='ml-10'>View on GitHub</span>
            </a>
          </ViewLink>
        </>
      )}
    </StyledDiv>
  );
};

export default WorkItem;
