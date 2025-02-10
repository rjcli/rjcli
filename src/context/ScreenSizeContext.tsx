import { createContext, useState, useEffect, type FC } from 'react';

import {
  ScreenSizeContextProps,
  ScreenSizeProviderProps,
} from '../types/CustomType.ts';

export const ScreenSizeContext = createContext<
  ScreenSizeContextProps | undefined
>(undefined);

export const ScreenSizeProvider: FC<ScreenSizeProviderProps> = ({
  children,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth <= 768,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);

  return (
    <ScreenSizeContext.Provider value={{ isSmallScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
