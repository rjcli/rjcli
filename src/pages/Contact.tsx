import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

import Copyright from '../components/Copyright.tsx';
import SubHeader from '../components/SubHeader.tsx';
import ContactItem from '../components/ContactItem.tsx';
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

const Contact = () => {
  return (
    <StyledMain>
      <SubHeader style={{ marginBottom: 0 }}>04 : Contact</SubHeader>
      <Row>
        <ContactItem
          contactTag='github'
          icon={<FaGithub />}
          title='github.com/rashmiraj513'
          href='https://github.com/rashmiraj513'
        />
        <ContactItem
          contactTag='linkedin'
          icon={<FaLinkedin />}
          title='Rashmi Raj'
          href='https://www.linkedin.com/in/rashmi-raj-62b6761b7/'
        />
      </Row>
      <Row>
        <ContactItem
          contactTag='phone'
          icon={<FaPhone />}
          title='Currently Not Available'
        />
        <ContactItem
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

export default Contact;
