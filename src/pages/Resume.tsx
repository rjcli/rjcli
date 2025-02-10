import type { FC } from 'react';
import styled from 'styled-components';

import SubHeader from '../components/SubHeader.tsx';

const StyledFrame = styled.iframe`
  width: 70%;
  display: block;
  margin: auto;
  border: none;
  height: 600px;
  margin-bottom: 5rem;
`;

const Resume: FC = () => {
  const pdfUrl =
    'https://drive.google.com/file/d/1WVGn5i2PrnLOfyua0W3S4ka1qitdCut2/preview';

  return (
    <div>
      <SubHeader>Resume</SubHeader>
      <StyledFrame src={pdfUrl} title='Resume'></StyledFrame>
    </div>
  );
};

export default Resume;
