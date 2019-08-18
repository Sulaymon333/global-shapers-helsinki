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
      <div className={footerStyles.socialMediaContainer}>
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

      <p className={footerStyles.credits}>Created by Integrify 2019 </p>
    </footer>
  )
}

export default Footer

/*social media adresses

<a href="https://www.facebook.com/ShapersHel/">facebook</a>  
<a href="https://twitter.com/globalshapers">twitter</a>     
<a href="https://www.instagram.com/shapershel/">instagram</a>  
<a href="https://www.linkedin.com/company/shapershel/">linkedIn</a>   
<a href="https://www.youtube.com/globalshapers">youTube</a>    
*/
