import React, { FC } from 'react'
import styles from './item.module.css'
import { Link } from 'react-router-dom'

type ItemProps = {
  icon?: string,
  title?: string,
  isActive?: boolean,
  onClickHandler?: (e: React.MouseEvent) => void
}

/**
 * 1. Написать на это тесты! Проверить что вызывается onClickHandler и что проставляется нужный класс, если isActive === true
 * @param icon
 * @param title
 * @param isActive
 * @param onClickHandler
 * @constructor
 * ----------вопросики
 */

export const Item: FC<ItemProps> = ({ icon, title, isActive, onClickHandler }) => {
  return (
    <>
      <img src={icon} className={isActive ? styles.iconActive : styles.iconItem} alt="icon" />
      <Link
        to={`//localhost:3000/${title}`}
        onClick={onClickHandler}
        className={isActive ? styles.titleActive : styles.titleItem}
      >
        {title}
      </Link>
    </>
  )
}
