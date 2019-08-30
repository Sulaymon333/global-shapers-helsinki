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
            <Link
              className={headerStyles.navItem}
              to="#about"
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/super-women-coders"
              activeClassName={headerStyles.activeNavItem}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="#join"
              activeClassName={headerStyles.activeNavItem}
            >
              Join
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
