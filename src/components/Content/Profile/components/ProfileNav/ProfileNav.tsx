import React, { FC, useState, useCallback } from "react"
import { Link } from "react-router-dom"
import styles from "./profileNav.module.css"

const NavItems = ["Tweets", "Tweets and replies", "Media", "Likes"]

export const ProfileNav: FC = () => {
  const [itemActive, setItemActive] = useState("Tweets")

  const onClickHandler = useCallback((e: React.MouseEvent) => {
    const title = e.currentTarget.innerHTML
    setItemActive(title)
  }, [])

  return (
    <nav className={styles.wrp}>
      <ul className={styles.profileNav}>
        {NavItems.map((item, index) => (
          <li key={index}>
            <Link
              data-testid={item}
              onClick={onClickHandler}
              to={`/${item}`}
              className={item === itemActive ? styles.profileNavActive : styles.profileItems}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
