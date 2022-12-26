import React from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export const SidebarButton = (props) => {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive ? 'btn-body-active' : 'btn-body';

  return (
    <Link to={props.to} onClick={props.action}>
      <div className={btnClass} onClick={props.action}>
        <IconContext.Provider
          onClick={props.action}
          value={{ size: '24px', className: 'btn-icon' }}
        >
          {props.icon}
          <div className='btn-title'>{props.title}</div>
        </IconContext.Provider>
      </div>
    </Link>
  );
};