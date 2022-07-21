import React, { FC } from 'react';
import { NavBar } from '../NavBar';
import './style.scss';
import { Button } from '../Button';
import { HashLink } from 'react-router-hash-link';

export const Header: FC = () => {
  return (
    <header className='header'>
      <NavBar />
      <div className='header__content'>
        <h1 className='header__title'>Test assignment for front-end developer</h1>
        <div className='header__text'>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
          JS with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </div>
        <div className='header__button'>
          <HashLink to="#sign-up">
            <Button label="Sign up" />
          </HashLink>
        </div>  
      </div>  
    </header>
  );
};
