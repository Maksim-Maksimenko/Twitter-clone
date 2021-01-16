import React, { FC } from "react"
import { Link } from "react-router-dom"

import styles from "./item.module.css"

type ItemProps = {
  icon: string
  title: string
  isActive: boolean
  onClickHandler: (e: React.MouseEvent) => void
}

export const Item: FC<ItemProps> = React.memo(({ icon, title, isActive, onClickHandler }) => {
  return (
    <>
      <img src={icon} className={isActive ? styles.iconActive : styles.iconItem} alt="icon" />
      <Link
        to={`/${title}`}
        onClick={onClickHandler}
        className={isActive ? styles.titleActive : styles.titleItem}
      >
        {title}
      </Link>
    </>
  )
})
