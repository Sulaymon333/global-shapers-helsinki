import React from "react"
import heroStyles from "./hero.module.scss"
import clock from "../assets/time.png"

const Hero = () => {
  return (
    <main>
      <div className={heroStyles.header}>
        <div className={heroStyles.heroDiv}>
          <h1 className={heroStyles.pageHeadingPrimary}>
            Global Shapers Helsinki (GSH)
          </h1>
          <h3 className={heroStyles.pageHeadingSecondary}>
            is a network of young people driving
            <br /> dialogue, action and change.
          </h3>
          <a
            className={heroStyles.joinBtn}
            target="_blank"
            href="https://google.com"
          >
            Join now!
          </a>
        </div>
      </div>
      <div className={heroStyles.bodyContainer}>
        <h1 className={heroStyles.bodyH1}>Who we are?</h1>
        <p className={heroStyles.bodyPara}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque hic
          minima omnis dolorem est excepturi cum ipsum eos mollitia
          necessitatibu consectetur adipisicing elit. Eaque hic minima omnis
          dolorem est excepturi cum ipsum eos mollitia necessitatibu. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Eaque hic minima
          omnis dolorem est excepturi cum ipsum eos mollitia necessitatibu
          consectetur adipisicing elit. Eaque hic minima omnis dolorem est
          excepturi cum ipsum eos mollitia necessitatibuLorem ipsum dolor sit,
          amet consectetur adipisicing elit. Eaque hic minima omnis dolorem est
          excepturi cum ipsum eos mollitia necessitatibu consectetur adipisicing
          elit. Eaque hic minima omnis dolorem est excepturi cum ipsum eos
          mollitia necessitatibu.
        </p>
        <h1 className={heroStyles.bodyH1}>GSH in numbers</h1>
        <div className={heroStyles.bodyIconsSection}>
          <div className={heroStyles.bodyIconWrapper}>
            <img className={heroStyles.bodyIconImg} src={clock} alt="Logo" />
            <p className={heroStyles.bodyIconText}>20 Shapers</p>
          </div>
          <div className={heroStyles.bodyIconWrapper}>
            <img className={heroStyles.bodyIconImg} src={clock} alt="Logo" />
            <p className={heroStyles.bodyIconText}>1000hrs Spent</p>
          </div>
          <div className={heroStyles.bodyIconWrapper}>
            <img className={heroStyles.bodyIconImg} src={clock} alt="Logo" />
            <p className={heroStyles.bodyIconText}>10 Projects completed</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero

// import React from "react"
// import heroStyles from "./hero.module.scss"

// const Hero = () => {
//   return (
//     <div className={heroStyles.header}>
//       <div className={heroStyles.heroDiv}>
//       <h1 className={heroStyles.pageHeadingPrimary}>
//         Global Shapers Helsinki (GSH)
//       </h1>
//       <h3 className={heroStyles.pageHeadingSecondary}>
//         is a network of young people driving
//         <br /> dialogue, action and change.
//       </h3>
//       <a  className={heroStyles.joinBtn} target="_blank" href="https://google.com">Join now!</a>
//     </div>
//     </div>

//   )
// }

// export default Hero
