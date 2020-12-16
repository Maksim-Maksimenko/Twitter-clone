import React, { FC } from 'react'

import InputSearch from './components/inputSearch/InputSearch'
import SidebarNav from './components/sidebarNav/SidebarNav'
import GroupsItem from './components/groupsItems/GroupsItems'

import styles from './sidebar.module.css'

import popular from '../../images/jpg/popular.jpg'

export const Sidebar: FC = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.wrp}>
        <InputSearch />
        <img src={popular} alt="popular" className={styles.popular} />
        <div className={styles.groups}>
          <h2 className={styles.titleLike}>You might like</h2>
          <GroupsItem />
        </div>
        <div className={styles.trends}>
          <p>Trends for you</p>
        </div>
        <SidebarNav />
      </div>
    </aside>
  )
}

// export default Sidebar
