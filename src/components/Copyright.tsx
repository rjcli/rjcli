import styled from 'styled-components';

const Footer = styled.footer`
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
`;

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return <Footer className='center'>&#169; {currentYear} | Rashmi Raj</Footer>;
};

export default Copyright;
