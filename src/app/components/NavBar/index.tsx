import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo';
import { NavItems } from './NavItems';

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`flex flex-row items-center justify-between w-full px-4 max-w-screen-2xl sm:px-8 md:px-10 lg:px-12 `};
`;

const LogoContainer = styled.div``;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
};
