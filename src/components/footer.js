import React from 'react'
import { Link } from 'gatsby' // for adding link from the other internal pages so it would not load again whole page

/*Icons*/

import logo from '../assets/gsh-logo.png'
import facebook from '../assets/social-icons/facebook.svg'
import instagram from '../assets/social-icons/instagram.svg'
import linkedIn from '../assets/social-icons/linkedin.svg'
import twitter from '../assets/social-icons/medium.svg'
// import youTube from '../assets/social-icons/youTube' // IMPORTANT! I dont have icon still

import footerStyles from './footer.scss' //conect styles

const Footer = () => {
  return (
    <div>
      <p>This is the Footer component</p>
      <div className={footerStyles.socialMedia}>
        <p>
          <a href="https://www.facebook.com/ShapersHel/">facebook</a>
        </p>

        <p>
          <a href="https://twitter.com/globalshapers">twitter</a>
        </p>

        <p>
          <a href="https://www.instagram.com/shapershel/">instagram</a>
        </p>

        <p>
          <a href="https://www.linkedin.com/company/shapershel/">linkedIn</a>
        </p>

        <p>
          <a href="https://www.youtube.com/globalshapers">youTube</a>
        </p>
      </div>
    </div>
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
