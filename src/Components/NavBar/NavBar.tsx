import { Button } from '../Button';
import React, { FC } from 'react';
import './style.scss';
import Logo from '../../images/Logo.svg'
import { HashLink } from 'react-router-hash-link';

export const NavBar: FC = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <img src={Logo} alt="React Logo" />
        <div className="navigation__buttons">
          <HashLink to="#users">
            <Button label="Users" />
          </HashLink>
          <HashLink to="#sign-up">
            <Button label="Sign up" />
          </HashLink>
        </div>
      </div>
    </nav>
  );
};
