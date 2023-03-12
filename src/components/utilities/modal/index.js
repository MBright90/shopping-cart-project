import { modalContext } from '@components/app/modalContext'
import { string } from 'prop-types'
import React, { useContext, useEffect } from 'react'

import style from './Modal.module.scss'

const Modal = ({ message }) => {
  const { currentModal, setCurrentModal } = useContext(modalContext)

  // Add timeout to remove modal after 1000ms
  useEffect(() => {
    let timerId

    if (currentModal) {
      timerId = setTimeout(() => {
        setCurrentModal(null)
      }, 3000)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [currentModal, setCurrentModal])

  return (
    <div className={style.modalContainer}>
      <p className={style.modalMessage}>{message}</p>
    </div>
  )
}

Modal.propTypes = {
  message: string
}

export default Modal
