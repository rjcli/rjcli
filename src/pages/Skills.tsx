import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoPython,
} from 'react-icons/io5';
import { SiTypescript, SiExpress, SiFastapi, SiDocker } from 'react-icons/si';
import { FaC, FaDatabase } from 'react-icons/fa6';
import { TbBrandCpp } from 'react-icons/tb';
import { IoMdGitBranch } from 'react-icons/io';
import { LiaNode } from 'react-icons/lia';

import SubHeader from '../components/SubHeader.tsx';
import Timeline from '../components/Timeline.tsx';
import SkillList from '../components/SkillList.tsx';
import { SkillObj } from '../types/CustomType.ts';
import { StyledMain } from './About.tsx';
import { academics } from '../assets/data/db.ts';

const Skills = () => {
  const skills: SkillObj[] = [
    { title: 'C', icon: <FaC /> },
    { title: 'C++', icon: <TbBrandCpp /> },
    { title: 'HTML5', icon: <IoLogoHtml5 /> },
    { title: 'CSS3', icon: <IoLogoCss3 /> },
    { title: 'JavaScript', icon: <IoLogoJavascript /> },
    { title: 'TypeScript', icon: <SiTypescript /> },
    { title: 'Git', icon: <IoMdGitBranch /> },
    { title: 'NodeJS', icon: <LiaNode /> },
    { title: 'ExpressJS', icon: <SiExpress /> },
    { title: 'React', icon: <IoLogoReact /> },
    { title: 'Python3', icon: <IoLogoPython /> },
    { title: 'FastAPI', icon: <SiFastapi /> },
    { title: 'Docker', icon: <SiDocker /> },
    { title: 'Database', icon: <FaDatabase /> },
  ];

  return (
    <StyledMain>
      <SubHeader>03 : Skills & Academics</SubHeader>

      <SubHeader isCentered={false} style={{ marginBottom: '5rem' }}>
        Skills
      </SubHeader>

      <SkillList skills={skills} />

      <SubHeader isCentered={false} style={{ marginBottom: '8rem' }}>
        Academics
      </SubHeader>

      <Timeline experiences={academics} />
    </StyledMain>
  );
};

export default Skills;
