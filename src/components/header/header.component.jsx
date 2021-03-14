import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

export default function Header() {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/'>
          SHOP
        </Link>
        <Link className='option' to='/'>
          CONTACT
        </Link>
      </div>
    </div>
  );
}
