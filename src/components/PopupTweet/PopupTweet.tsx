import React, { useState, useCallback, FC } from "react"
import styles from "./popupTweet.module.css"
import avatar from "../../images/png/Bitmap.png"
import globe from "../../images/svg/popup/globe-alt.svg"

import iconOne from "../../images/svg/popup/image.svg"
import music from "../../images/svg/popup/music-speaker.svg"
import align from "../../images/svg/popup/align-left.svg"
import calendar from "../../images/svg/popup/calendar-two.svg"
import coffee from "../../images/svg/popup/coffee.svg"

type props = {
  setPopup: (cb: (prev: boolean) => boolean) => void
  addPost: (value: string) => void
}

const PopupTweet: FC<props> = ({ setPopup, addPost }) => {
  const [value, setValue] = useState("")

  const onClick = useCallback(() => setPopup((prev: boolean) => !prev), [setPopup])

  const ChangeEvent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }, [])

  const onButtonClick = useCallback(
    (e: React.MouseEvent) => {
      if (value.length > 0) {
        addPost(value)
        setValue("")
        onClick()
      } else {
        onClick()
      }
    },
    [value, onClick, addPost]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrp}>
        <div className={styles.close}>
          <button type="button" className={styles.closeBtn} onClick={onClick}>
            X
          </button>
        </div>
        <div className={styles.wrapperInput}>
          <img src={avatar} alt="avatar" className={styles.newsAvatar} />
          <textarea
            placeholder="Что происходит ?"
            value={value}
            onChange={ChangeEvent}
            className={styles.inputText}
          ></textarea>
        </div>
        <div className={styles.wrapperPrivate}>
          <img src={globe} alt="globe" className={styles.popup} />
          <p>Отвечать могут все пользователи </p>
        </div>
        <div className={styles.wrapperNav}>
          <ul className={styles.wrapperItem}>
            <li>
              <button className={styles.popupBtn}>
                <img src={iconOne} alt="iconOne" className={styles.popup} />
              </button>
            </li>
            <li>
              <button className={styles.popupBtn}>
                <img src={music} alt="music" className={styles.popup} />
              </button>
            </li>
            <li>
              <button className={styles.popupBtn}>
                <img src={align} alt="align" className={styles.popup} />
              </button>
            </li>
            <li>
              <button className={styles.popupBtn}>
                <img src={calendar} alt="calendar" className={styles.popup} />
              </button>
            </li>
            <li>
              <button className={styles.popupBtn}>
                <img src={coffee} alt="coffee" className={styles.popup} />
              </button>
            </li>
          </ul>
          <button className={value !== "" ? styles.btnActive : styles.btn} onClick={onButtonClick}>
            Tweets
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PopupTweet)
