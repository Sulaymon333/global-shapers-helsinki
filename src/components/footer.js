import React from 'react'
import footerStyles from './footer.module.scss' //conect styles

/* import { Link } from 'gatsby' // for adding link from the other internal pages so it would not load again whole page */

/*Icons*/

import logo from '../assets/gsh-logo.png'
import facebook from '../assets/social-icons/facebook.svg'
import instagram from '../assets/social-icons/instagram.svg'
import linkedIn from '../assets/social-icons/linkedin.svg'
import twitter from '../assets/social-icons/medium.svg'
// import youTube from '../assets/social-icons/youTube' // IMPORTANT! I dont have icon still

const Footer = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <form className={footerStyles.formContainer}>
        <p className={footerStyles.ContactUs}>Contact us</p>

        <label className={footerStyles.email}>
          <p>Email:</p>
          <input type="text" name="email" />
        </label>
        <label className={footerStyles.Message}>
          <p>Message:</p>
          <input type="text" name="Message" />
        </label>
        <button className={footerStyles.button} type="submit">
          Send
        </button>
      </form>

      <div className={footerStyles.socialMediaContainer}>
        <p> Folow us on social media: </p>
        <p className={footerStyles.socialIconsImg}>
          <a href="https://www.facebook.com/ShapersHel/">facebook</a>
        </p>

        <p className={footerStyles.socialIcons}>
          <a href="https://twitter.com/globalshapers">twitter</a>
        </p>

        <p className={footerStyles.socialIcons}>
          <a href="https://www.instagram.com/shapershel/">instagram</a>
        </p>

        <p className={footerStyles.socialIcons}>
          <a href="https://www.linkedin.com/company/shapershel/">linkedIn </a>
        </p>

        <p className={footerStyles.socialIcons}>
          <a href="https://www.youtube.com/globalshapers">youTube</a>
        </p>
      </div>
      <div className={footerStyles.GlobalShapersCount}>
        <span className={footerStyles.GlobalShapersCountText}>
          Global Shapers Community
        </span>
        has more then
        <span className={footerStyles.GlobalShapersCountNumbers}>
          6000
        </span>{' '}
        members and
        <span className={footerStyles.GlobalShapersCountNumbers}>458</span> hubs
        worldwide
      </div>
      <p className={footerStyles.credits}>Created by Integrify 2019 </p>
    </footer>
  )
}

export default Footer
