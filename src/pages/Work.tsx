import styled from 'styled-components';

import SubHeader from '../components/SubHeader.tsx';
import WorkItem from '../components/WorkItem.tsx';
import { WorkItemProps } from '../types/CustomType.tsx';
import { StyledMain } from './About.tsx';

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
  const workItems: WorkItemProps[] = [
    {
      title: 'Malware Detection using ML',
      subtitle: 'A Working Machine Learning Modal for Malware Detection',
      description:
        'A Machine Learning model for Malware Detection, built using scikit-learn. This model uses various ML algorithms like Simple KNN, Random Forest, Decision Tree, XGBoost and finally selects the best model among these algorithms according to the training accuracy.',
      link: 'https://github.com/rashmiraj513/Malware_Detection_Using_ML',
    },
    {
      title: 'NoteTaker Full Stack Website',
      subtitle: 'A Full Stack Website for Note Taking',
      description:
        'A full-stack website created for note taking purposes. For front-end, HTML, CSS, and JS is used and for back-end, Express and NodeJS is used. For storing the notes, MongoDB is used. Also have advance features like searching a note using Title or, Body content or, according to the date created.',
      link: 'https://github.com/rashmiraj513/toDoList-homepage',
    },
    {
      title: 'Portfolio Website using React TSX',
      subtitle:
        'A Portfolio Website to showcase my skills to employers and collaborators',
      description:
        'This portfolio website is created using React TSX. The purpose of this website is to showcase my projects, skills, and experiences to potential employers, clients, and collaborators.',
      link: 'https://github.com/rashmiraj513/portfolio-react',
    },
    {
      title: 'Basic Result Management System',
      subtitle: 'A Basic Result Management System with Login and See Results',
      description:
        'This basic result management system is created using Angular and NodeJS. It provides login options for admins to add results and provides only search options students.',
      link: 'https://github.com/rashmiraj513/result-management-system-angular',
    },
  ];

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
        <a
          href='https://github.com/rashmiraj513?tab=repositories'
          target='_blank'
        >
          GitHub
        </a>
        .
      </StyledPara>
    </StyledMain>
  );
};

export default Work;
