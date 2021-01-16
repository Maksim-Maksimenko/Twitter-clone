import React, { FC } from "react"
import { Button } from "./components/button/Button"
import { MenuItems } from "./components/menuItems/MenuItems"

import styles from "./nav.module.css"

type props = {
  addPost: (value: string) => void
}

export const Nav: FC<props> = React.memo(({ addPost }) => {
  return (
    <div className={styles.menu}>
      <nav>
        <MenuItems />
      </nav>
      <Button addPost={addPost} />
    </div>
  )
})
