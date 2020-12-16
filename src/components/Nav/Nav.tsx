import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from './camponents/button/Button'
import styles from './nav.module.css'
import MenuItems from './camponents/menuItems/MenuItems'

export const Nav: FC = () => {
  return (
    <Router>
      <nav className={styles.menu}>
        <MenuItems />
        <Button />
      </nav>
    </Router>
  )
}

// export default Nav
