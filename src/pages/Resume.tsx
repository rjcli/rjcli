import { type FC, useState } from 'react';
import styled from 'styled-components';

import SubHeader from '../components/SubHeader.tsx';
import Spinner from '../components/Spinner.tsx';
import { useScreenSize } from '../context/useScreenSize.ts';

const StyledFrame = styled.iframe<{
  $showResume: boolean;
  $smallScreen: boolean;
}>`
  width: ${({ $smallScreen }) => ($smallScreen ? '100%' : '70%')};
  margin: auto;
  border: none;
  height: ${({ $smallScreen }) => ($smallScreen ? '550px' : '600px')};
  margin-bottom: 5rem;
  display: ${({ $showResume }) => ($showResume ? 'none' : 'block')};
`;

const Resume: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { isSmallScreen } = useScreenSize();

  const handleLoad = () => {
    setLoading(false);
  };

  const pdfUrl =
    'https://drive.google.com/file/d/1WVGn5i2PrnLOfyua0W3S4ka1qitdCut2/preview';

  return (
    <div>
      <SubHeader>Resume</SubHeader>
      {loading && <Spinner />}

      <StyledFrame
        src={pdfUrl}
        title='Resume'
        onLoad={handleLoad}
        $showResume={loading}
        $smallScreen={isSmallScreen}
      ></StyledFrame>
    </div>
  );
};

export default Resume;
