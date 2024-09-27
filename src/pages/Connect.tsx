import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

import Copyright from '../components/Copyright.tsx';
import SubHeader from '../components/SubHeader.tsx';
import ConnectItem from '../components/ConnectItem.tsx';
import { StyledMain } from './About.tsx';

export const Row = styled.div`
  display: flex;
  @media (max-width: 908px) {
    display: block;
    margin: auto;
  }
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 4rem 0;
  gap: 2rem;
`;

const Connect = () => {
  return (
    <StyledMain>
      <SubHeader style={{ marginBottom: 0 }}>04 : Connect</SubHeader>
      <Row>
        <ConnectItem
          contactTag='github'
          icon={<FaGithub />}
          title='github.com/rashmiraj513'
          href='https://github.com/rashmiraj513'
        />
        <ConnectItem
          contactTag='linkedin'
          icon={<FaLinkedin />}
          title='Rashmi Raj'
          href='https://www.linkedin.com/in/rashmi-raj-62b6761b7/'
        />
      </Row>
      <Row>
        <ConnectItem
          contactTag='phone'
          icon={<FaPhone />}
          title='Currently Not Available'
        />
        <ConnectItem
          contactTag='gmail'
          icon={<FaMailBulk />}
          title='rashmiraj7877@gmail.com'
          href='mailto:rashmiraj7877@gmail.com'
        />
      </Row>
      <Copyright />
    </StyledMain>
  );
};

export default Connect;
