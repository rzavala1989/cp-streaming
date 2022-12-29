import React from 'react';
import './styles.css';
import github from '../assets/github_icon.png';

export const Feed = () => {
  return (
    <div className='screen-container'>
      <div className='feed-container'>
        <h1 className='feed-title'>CPOTIFY</h1>
        <p className='feed-subtitle'>Welcome to my Music Service!</p>

        <div className='about-container'>
          <h2 className='about-description'>
            Our music service was created for special requirements, complete
            relaxation, and alienation from everyday problems.
          </h2>
        </div>

        <div className='developers-container'>
          <h3 className='developers-title'>Project developers</h3>
          <ul className='developers-list'>
            <li className='list-item'>
              <a href='https://github.com/rzavala1989'>
                <img className='item-img' src={github} alt='github_icon' />
              </a>
              <p className='item-name'>
                Ricardo Zavala
                <br />
                Software Developer
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
