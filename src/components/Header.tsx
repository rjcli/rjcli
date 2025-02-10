import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiAlignRight } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

import HeaderLink from './HeaderLink.tsx';
import { HeaderItemType } from '../types/CustomType.ts';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MobileNav = styled.ul<{ $show: boolean }>`
  position: ${({ $show }) => ($show ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 4rem 3rem;
  backdrop-filter: blur(${({ $show }) => ($show ? '2rem' : 0)});
  -webkit-backdrop-filter: blur(${({ $show }) => ($show ? '2rem' : 0)});
  z-index: 999;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  display: ${({ $show }) => ($show ? 'flex' : 'block')};
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: var(--color-sky) !important;
`;

const Logo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;
`;

const Header: FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth <= 768,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const headerItems: HeaderItemType[] = [
    { label: '00 : About', to: '/' },
    { label: '01 : Experiences', to: '/experiences' },
    { label: '02 : Work', to: '/work' },
    { label: '03 : S&A', to: '/skills' },
    { label: '04 : Connect', to: '/connect' },
  ];

  const handleToggleSidebar = (): void => {
    setSidebarVisible((sidebarVisible) => !sidebarVisible);
  };

  return (
    <header className='m-2'>
      {isSmallScreen ? (
        <ul>
          <li onClick={handleToggleSidebar} className='menu-button'>
            {isSidebarVisible ? (
              <MobileNav $show={isSidebarVisible}>
                <MdCancel size='3rem' className='menu-button' />
                {headerItems.map((item, index) => (
                  <li key={index}>
                    <HeaderLink to={item.to} label={item.label} />
                  </li>
                ))}
              </MobileNav>
            ) : (
              <FiAlignRight size='3rem' />
            )}
          </li>
        </ul>
      ) : (
        <StyledNav>
          <Logo>
            {headerItems.map((item, index) => (
              <li key={index}>
                <HeaderLink to={item.to} label={item.label} />
              </li>
            ))}
          </Logo>
        </StyledNav>
      )}
    </header>
  );
};

export default Header;
