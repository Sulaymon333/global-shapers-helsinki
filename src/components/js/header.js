import React, { useState } from 'react'
import { Link } from 'gatsby'

import logo from '../../assets/gsh-logo.png'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  const [toggleMenuBtn, setToggleMenuBtn] = useState(false)

  const handleMenuBtn = () => {
    toggleMenuBtn ? setToggleMenuBtn(false) : setToggleMenuBtn(true)
  }

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <Link to="/" className={headerStyles.brandLogo}>
          <div className={headerStyles.imgLogo}>
            <img className={headerStyles.img} src={logo} alt="Logo" />
          </div>
        </Link>

        <nav className={headerStyles.navigation}>
          <button className={headerStyles.hamburger} onClick={handleMenuBtn}>
            <div></div>
            <div></div>
            <div></div>
          </button>

          <ul
            className={`${headerStyles.navList} ${toggleMenuBtn &&
              headerStyles.isOpen}`}
          >
            <li
              className={`${headerStyles.navItem} ${toggleMenuBtn &&
                headerStyles.fade}`}
              onClick={handleMenuBtn}
            >
              <a className={headerStyles.navLink} href="#about">
                About
              </a>
            </li>

            <li
              className={`${headerStyles.navItem} ${toggleMenuBtn &&
                headerStyles.fade}`}
              onClick={handleMenuBtn}
            >
              <Link
                className={headerStyles.navLink}
                activeClassName={headerStyles.activeNavItem}
                to="/project/super-women-coders-club"
              >
                Projects
              </Link>
            </li>

            <li
              className={`${headerStyles.navItem} ${toggleMenuBtn &&
                headerStyles.fade}`}
              onClick={handleMenuBtn}
            >
              <a className={headerStyles.navLink} href="#join">
                Join
              </a>
            </li>
          </ul>
          <div
            className={`${headerStyles.overlay} ${toggleMenuBtn ||
              headerStyles.removeOverlay}`}
            onClick={handleMenuBtn}
          ></div>
        </nav>
      </div>
    </header>
  )
}

export default Header
