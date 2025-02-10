import { useContext } from 'react';
import { ScreenSizeContext } from './ScreenSizeContext.tsx';

export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider');
  }
  return context;
};
