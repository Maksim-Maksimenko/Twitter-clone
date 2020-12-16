import React, { FC } from 'react'
import styles from './popupTweet.module.css'
import { Link } from 'react-router-dom'

const PopupTweet: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrp}>
        <div className={styles.close}>
          <Link to={'/'} className={styles.closeBtn}>
            X
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopupTweet
