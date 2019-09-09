import React from 'react'

import newsletterStyles from '../styles/newsletter.module.scss'

const Newsletter = () => {
  return (
    <section className={newsletterStyles.newsletterSection}>
      <div className={newsletterStyles.container}>
        <div className={newsletterStyles.text}>Subscribe to Our Newsletter</div>
        <form
          className={newsletterStyles.newsletterForm}
          name="newsletter-form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          <div className={newsletterStyles.emailBox}>
            <input name="email" type="email" placeholder="Your email address" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
