import React from 'react'

import newsletterStyles from '../styles/newsletter.module.scss'

const Newsletter = () => {
  return (
    <section className={newsletterStyles.newsletterSection}>
      <div className={newsletterStyles.container}>
        <div className={newsletterStyles.text}>Subscribe to Our Newsletter</div>
        <form
          className={newsletterStyles.newsletterForm}
          name="newsletterForm"
          method="POST"
          netlify="true"
        >
          <input type="text" placeholder="Your email address" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
