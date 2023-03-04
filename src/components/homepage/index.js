import gTwoProImage from '@assets/images/g2-pro.png'
import mbProImage from '@assets/images/mb-hero-pro.jpg'
import mbWhitePro from '@assets/images/mb-white-pro.png'
import oryxProImage from '@assets/images/oryx-pro.jpg'
import React, { useEffect, useState } from 'react'

import style from './Homepage.module.scss'

const imageArray = [mbProImage, gTwoProImage, mbWhitePro, oryxProImage]
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
      style={{ backgroundImage: `url(${imageArray[currentImageIndex]}` }}
    >
      <div className={style.overlay} />
    </div>
  )
}

export default Homepage
