import SubHeader from '../components/SubHeader.tsx';
import Timeline from '../components/Timeline.tsx';
import { StyledMain } from './About.tsx';
import { experiences } from '../assets/data/db.ts';

const Experiences = () => {
  return (
    <StyledMain>
      <SubHeader>01 : Experiences</SubHeader>

      <Timeline experiences={experiences} />
    </StyledMain>
  );
};

export default Experiences;
