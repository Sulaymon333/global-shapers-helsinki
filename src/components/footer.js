import React from 'react'
import footerStyles from './footer.module.scss'
// import facebook from '../assets/social-icons/facebook.svg'
// import instagram from '../assets/social-icons/instagram.svg'
// import linkedIn from '../assets/social-icons/linkedin.svg'
// import twitter from '../assets/social-icons/twitter.svg'
// import youTube from '../assets/social-icons/medium.svg'

const Footer = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <form className={footerStyles.formContainer}>
        <div className={footerStyles.ContactUsText}>Contact us</div>

        <label className={footerStyles.emailText} htmlFor="email">
          <p>Email:</p>
          <input type="text" name="email" id="email" />
        </label>
        <label className={footerStyles.MessageText} htmlFor="message">
          <p>Message:</p>
          <input
            // className="{footerStyles.msgInput}"
            type="text"
            name="Message"
            id="message"
          />
        </label>
        <button className={footerStyles.button} type="submit">
          Send
        </button>
      </form>

      <div className={footerStyles.socialMediaContainer}>
        <p className={footerStyles.socialMediaText}>
          Folow us on social media:
        </p>
        <p className={footerStyles.socialIconsImg}>
          <a href="https://www.facebook.com/ShapersHel/">facebook</a>
        </p>

        <p className={footerStyles.socialIconsImg}>
          <a href="https://twitter.com/globalshapers">twitter</a>
        </p>
        <p className={footerStyles.socialIconsImg}>
          <a href="https://www.instagram.com/shapershel/">instagram</a>
        </p>
        <p className={footerStyles.socialIconsImg}>
          <a href="https://www.linkedin.com/company/shapershel/">linkedIn</a>
        </p>

        <p className={footerStyles.socialIconsImg}>
          <a href="https://www.youtube.com/globalshapers">youTube</a>
        </p>
      </div>
      <div className={footerStyles.GScountAndOwnDevContainer}>
        <div className={footerStyles.GlobalShapersCountContainer}>
          <span className={footerStyles.GlobalShapersCountText}>
            Global Shapers Community
          </span>
          has more then
          <span className={footerStyles.GlobalShapersCountNumber}>6000</span>
          members and
          <span className={footerStyles.GlobalShapersCountNumber}>458</span>
          hubs worldwide
        </div>

        <div className={footerStyles.ownedAndDevelopedConatiner}>
          <p className={footerStyles.ownedText}>
            Global Shapers Helsinki &copy; 2019
          </p>
          <p className={footerStyles.creditsText}>
            The site was developed by Integrify Web Devlopers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
