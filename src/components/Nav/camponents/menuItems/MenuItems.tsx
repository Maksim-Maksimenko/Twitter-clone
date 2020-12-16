import React, { useState, useCallback, FC } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Item } from './components/Item/Item'

import dataNav from '../../data-nav'
import logo from '../../../../images/svg/logo.svg'
import styles from './menuItems.module.css'

type PropsClick = {
  handleClickSpy?: (title: string) => void | string
}

export const MenuItems: FC<PropsClick> = ({ handleClickSpy }) => {
  const [activeElement, setActiveElement] = useState('Profile')

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const title: string = e.currentTarget.innerHTML
      setActiveElement(title)

      if (handleClickSpy) {
        handleClickSpy(activeElement)
      }
    },
    [activeElement, handleClickSpy]
  )

  return (
    <>
      <ul>
        <Router>
          <li>
            <Link to={'/'}>{<img src={logo} alt="logo" className={styles.menuLogo} />}</Link>
          </li>
          {dataNav.map((el) => (
            <li key={el.title} className={styles.menuItem}>
              <Item
                icon={el.icon}
                title={el.title}
                onClickHandler={handleClick}
                isActive={el.title === activeElement}
              />
            </li>
          ))}
        </Router>
      </ul>
    </>
  )
}

export default MenuItems
