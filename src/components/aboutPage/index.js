import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import style from './AboutPage.module.scss'

const AboutPage = () => {
  return (
    <div className={style.aboutPageContainer}>
      <p className={style.title}>
        <span className={style.bold}>About this Website</span>
      </p>
      <p className={style.aboutPara}>
        This is a fictional shopping website for a real guitar manufacturer, Manson Guitar Works.
        The creator has no affiliation with the real life company and has created it to further his
        learning while using something he is interested in. This website has been{' '}
        <span className={style.bold}>created using ReactJS</span> by:
      </p>
      <a className={style.githubLink} href="https://github.com/MBright90/shopping-cart-project">
        <FontAwesomeIcon icon={faGithub} /> mBright90
      </a>
      <p className={style.title}>
        <span className={style.bold}> A Brief History of Manson&apos;s</span>
      </p>
      <p className={style.infoPara}>
        The current Manson Guitar Works facility can trace its roots all the way back to the 60s
        when Hugh’s brother, Andy Manson, decided to build his first acoustic guitar aged just 17.
        Andy later studied at the <span className={style.bold}>London College of Furniture</span> in
        1968/69 where lectures in the science of soundboards became of particular interest. Andy
        developed his passion into a guitar repair/building business specializing in acoustic
        instruments such as mandolas, bouzoukis, and other folk instruments. It wasn’t long after
        this that Andy’s younger brother Hugh joined the scene deciding to specialize in the
        electric side of guitar making. This was to become the first foundations of the current
        Manson Guitar Works.
      </p>
      <p className={style.infoPara}>
        The new alliance, based in Crowborough in Sussex, was turning out various custom one-off
        instruments alongside a more production based line. In the electric range that forms part of
        the Works history these semi custom models were called the Kestrel and Merlin Series. Even
        in its earliest incarnation Manson Guitars focused on one-off customs alongside a more
        production based range - an M-series in effect - just like the current structure today. A
        great example of a full custom is the bass guitar produced for British string company
        Rotosound, with the company&apos;s trademark roaring lion as part of the inlay work. The
        bass-wielding skeleton seems to appear on several pages of Manson Guitars images! No-one
        seems quite sure why when quizzed today. The company slogan of the late seventies and early
        eighties promoted the values of quality, experience and value - “If you care about your
        music, you care about your guitar, so{' '}
        <span className={style.bold}>don&apos;t settle for second best. MOVE UP TO A MANSON!”</span>
      </p>
    </div>
  )
}

export default AboutPage
