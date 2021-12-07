import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtn,
  SideBtnRoute,
} from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">About</SidebarLink>
            <SidebarLink onClick={toggle} to="discover">Discover</SidebarLink>
            <SidebarLink onClick={toggle} to="services">Service</SidebarLink>
            <SidebarLink onClick={toggle} to="signup">Sign Up</SidebarLink>
          </SidebarMenu>
          <SideBtn>
            <SideBtnRoute to="/signin">Sign In</SideBtnRoute>
          </SideBtn>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
