import React, { useState } from 'react'
import s from './Header.module.scss'
import logo from './logo.png';
import Search from './Search/Search';
import Nav from '../../Nav/Navigation';



const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.logo}><a href="#"><img src={logo} alt="logo" /></a></h1>
      <ul className={s.ul}>
        
        <li><Nav ul={s.ul} li={s.li} a={s.a} /></li>
        <li><Search /></li>
      </ul>
      
    </header>
  )
}

export default Header