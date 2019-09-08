import React from 'react'

import facebook from '../../assets/social-icons/facebook.svg'
import instagram from '../../assets/social-icons/instagram.svg'
import linkedIn from '../../assets/social-icons/linkedin.svg'
import twitter from '../../assets/social-icons/twitter.svg'
import youTube from '../../assets/social-icons/youtube.svg'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footerSection}>
      <div className={footerStyles.container}>
        <form className={footerStyles.ContactUsFormContainer}>
          {/* {CONTACT US} */}
          <div className={footerStyles.ContactUsText}>Contact us</div>

          {/* {EMAIL + MSG =>FORM CONTAINER} */}
          <div className={footerStyles.formContainer}>
            <div className={footerStyles.emailBox}>
              <label className={footerStyles.emailText} htmlFor="email">
                <span>Email:</span>
                <input
                  className={footerStyles.emailInput}
                  type="text"
                  name="email"
                  id="email"
                />
              </label>
            </div>
            <div className={footerStyles.msgBox}>
              <label className={footerStyles.MessageText} htmlFor="message">
                <p>Message:</p>
                <textarea
                  className={footerStyles.msgInput}
                  type="text"
                  name="Message"
                  id="message"
                />
              </label>
            </div>
            {/* BUTTON */}
            <div className={footerStyles.buttonBox}>
              <button className={footerStyles.button} type="submit">
                Send
              </button>
            </div>
          </div>
        </form>

        {/* SOCIAL MEDIA */}

        <div className={footerStyles.socialMediaContainer}>
          <div className={footerStyles.socialMediaText}>
            Follow us on social media:
          </div>
          <div className={footerStyles.allSocialIconsContainer}>
            <p className={footerStyles.socialIconsImg}>
              <a href="https://www.facebook.com/ShapersHel/">
                <img
                  className={footerStyles.img}
                  src={facebook}
                  alt="Facebook"
                />
              </a>
            </p>
            <p className={footerStyles.socialIconsImg}>
              <a href="https://twitter.com/globalshapers">
                {' '}
                <img className={footerStyles.img} src={twitter} alt="Twitter" />
              </a>
            </p>
            <p className={footerStyles.socialIconsImg}>
              <a href="https://www.instagram.com/shapershel/">
                {' '}
                <img
                  className={footerStyles.img}
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </p>
            <p className={footerStyles.socialIconsImg}>
              <a href="https://www.linkedin.com/company/shapershel/">
                {' '}
                <img
                  className={footerStyles.img}
                  src={linkedIn}
                  alt="Linkedin"
                />
              </a>
            </p>
            <p className={footerStyles.socialIconsImg}>
              <a href="https://www.youtube.com/channel/UC-tUMxwPNIYp_ZkN4CX0J9A">
                <img className={footerStyles.img} src={youTube} alt="youTube" />
              </a>
            </p>
          </div>
        </div>

        {/* count and owndevelop */}

        <div className={footerStyles.GScountAndOwnDevContainer}>
          <div className={footerStyles.GlobalShapersCountContainer}>
            {/* COUNT */}

            <span className={footerStyles.GlobalShapersCountText}>
              Global Shapers Community
            </span>
            <span className={footerStyles.GlobalShapersCountText2}>
              {' '}
              has more then
            </span>
            <span className={footerStyles.GlobalShapersCountNumber}>
              {' '}
              6000{' '}
            </span>
            <span className={footerStyles.GlobalShapersCountText2}>
              members and
            </span>

            <span className={footerStyles.GlobalShapersCountNumber}> 458 </span>
            <span className={footerStyles.GlobalShapersCountText2}>
              hubs worldwide.
            </span>
          </div>
          {/* own and developed */}

          <div className={footerStyles.ownedAndDevelopedContainer}>
            <p className={footerStyles.ownedText}>
              Global Shapers Helsinki &copy; 2019
            </p>
            <p className={footerStyles.creditsText}>
              The site was developed by Integrify Web Devlopers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer