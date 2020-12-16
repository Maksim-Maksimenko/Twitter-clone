import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import styles from './sidebarNav.module.css'
import more from '../../../../images/svg/Path.svg'

const navItems = ['Terms', 'Privacy policy', 'Cookies', 'Ads info', 'More']

type ClickType = {
  onClickHandler?: () => void
}

export const SidebarNav: React.FC<ClickType> = ({ onClickHandler }) => {
  return (
    <>
      <Router>
        <div className={styles.groupsNav}>
          {navItems.map((item, index) => (
            <Link key={index} to={`${item}`} className={styles.link} onClick={onClickHandler}>
              {item}
            </Link>
          ))}
          <img src={more} alt="path" />
        </div>
        <p className={styles.inc}>© 2020 Twitter, Inc.</p>
      </Router>
    </>
  )
}

export default SidebarNav
