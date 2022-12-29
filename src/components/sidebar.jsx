import React from 'react';
import logo from '../logo.svg';
import './styles.css';
import { SidebarButton } from './sidebarButton';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaGripfire } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { IoLibrary } from 'react-icons/io5';
import { FaSignOutAlt } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <img src={logo} alt='logo' width='150px' height='150px' />
      <div>
        <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />} />
        <SidebarButton title='Trending' to='/trending' icon={<FaGripfire />} />
        <SidebarButton title='Player' to='/player' icon={<FaPlay />} />
        <SidebarButton
          title='Recommended'
          to='/recommended'
          icon={<MdFavorite />}
        />{' '}
        <SidebarButton title='Library' to='/' icon={<IoLibrary />} />
      </div>
      <SidebarButton title='Logout' to='' icon={<FaSignOutAlt />} />
    </div>
  );
};
