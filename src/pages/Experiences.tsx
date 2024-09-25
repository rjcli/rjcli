import SubHeader from '../components/SubHeader.tsx';
import { ExperienceObj } from '../types/CustomType.ts';
import Timeline from '../components/Timeline.tsx';
import { StyledMain } from './About.tsx';

const Experiences = () => {
  const experiences: ExperienceObj[] = [
    {
      date: 'Aug 2022 - Nov 2022',
      title: 'Intern at Nagarro',
      description:
        'As an intern at Nagarro, I dived into basics of web development, Angular, NodeJS, and DotNet development!',
      color: '#41516c',
    },
    {
      date: 'Dec 2022 - July 2023',
      title: 'Associate Engineer at Nagarro',
      description:
        'Led cross-functional collaboration for a 15% performance boost in system usability; showcased expertise by integrating packages, APIs, and UI components while upgrading NodeJS and Angular versions.',
      color: '#fbca3e',
    },
    {
      date: 'June 2024 - May 2025',
      title: 'Intern at Intel',
      description:
        'Enhanced front-end of an internal GenAI tool using React, ensuring seamless integration with back-end APIs; expanding to full-stack development by learning Docker, PostgreSQL, and FastAPI.',
      color: '#e24a68',
    },
  ];

  return (
    <StyledMain>
      <SubHeader>01 : Experiences</SubHeader>

      <Timeline experiences={experiences} />
    </StyledMain>
  );
};

export default Experiences;
