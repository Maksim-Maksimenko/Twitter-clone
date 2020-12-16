import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './profile.module.css'
import coverImage from '../../images/jpg/cover-photo.jpg'
import avatar from '../../images/png/Bitmap.png'
import arrow from '../../images/svg/arrow-back.svg'
import calendar from '../../images/svg/calendar.svg'

export const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.wrapperHeader}>
        <img src={arrow} alt="arrow-back" />
        <div className={styles.wrapper}>
          <h4 className={styles.heading}>Northwest Agency</h4>
          <p className={styles.tweets}>16 Tweets</p>
        </div>
      </div>
      <div>
        <div className={styles.wrp}>
          <img src={coverImage} alt="background" className={styles.backgroundProfile} />
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
      </div>

      <div className={styles.wrapperButton}>
        <button type="button" className={styles.buttonEdit}>
          Edit profile
        </button>
      </div>
      <div className={styles.profileIntro}>
        <h2>Northwest Agency</h2>
        <p>@NorthwestAgency</p>
      </div>
      <p className={styles.description}>
        Design and development agency that promotes innovation through elevated websites,
        applications, and eCommerce solutions
      </p>
      <Link className={styles.linkTranslate} to={'/'}>
        Translate bio
      </Link>
      <p className={styles.date}>
        <img src={calendar} alt="calendar" />
        Joined November 2019
      </p>
      <div className={styles.following}>
        <p>29 Following</p>
        <p>6 Followers</p>
      </div>
    </div>
  )
}
