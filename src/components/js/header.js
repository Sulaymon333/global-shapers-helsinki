import React from 'react'
import { Link } from 'gatsby'

import logo from '../../assets/gsh-logo.svg'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <Link to="/" className={headerStyles.brandLogo}>
          <div className={headerStyles.imgLogo}>
            <img className={headerStyles.img} src={logo} alt="Logo" />
          </div>
        </Link>

        <nav className={headerStyles.navigation}>
          <ul className={headerStyles.navList}>
            <li className={headerStyles.navItem}>
              <a className={headerStyles.navLink} href="#about">
                About
              </a>
            </li>

            <li className={headerStyles.navItem}>
              <Link
                className={headerStyles.navLink}
                activeClassName={headerStyles.activeNavItem}
                to="/project/super-women-coders"
              >
                Projects
              </Link>
            </li>

            <li className={headerStyles.navItem}>
              <a className={headerStyles.navLink} href="#join">
                Join
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
