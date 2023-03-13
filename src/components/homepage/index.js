import bgImages from '@assets/images/background'
import React, { useEffect, useState } from 'react'

import style from './Homepage.module.scss'

const imageArray = Object.values(bgImages)
let timerId

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    timerId = setTimeout(() => {
      setCurrentImageIndex(currentImageIndex + 1 >= imageArray.length ? 0 : currentImageIndex + 1)
    }, 5000)
    return () => {
      clearTimeout(timerId)
    }
  }, [currentImageIndex])

  return (
    <div
      className={style.slideShowImage}
      style={{ backgroundImage: `url(${imageArray[currentImageIndex]})` }}
    >
      <div className={style.overlay} />
      <div className={style.voucherAnnouncement}>
        <p className={style.announcement}>
          Use code <span className={style.code}>mBright90</span> for 10% off your order
        </p>
      </div>
    </div>
  )
}

export default Homepage
