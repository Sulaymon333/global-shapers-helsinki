import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/gsh-logo.png'
import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.imgLogo}>
        <img className={headerStyles.img} src={logo} alt="Logo" />
      </div>

      <nav className={headerStyles.mainNav}>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} to="#">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="#">
              Projects
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="#">
              Join
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="#">
              Apply
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
