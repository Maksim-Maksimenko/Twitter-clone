import React, { useState } from 'react'
import { GroupItem } from './components/GroupItem'

import Button from '../../components/groupsBtn/Button'
import groups from './dataGroups'
import styles from './groupsItems.module.css'

type GroupsItemType = {
  onClickHandler?: (isOpen: boolean) => void
}

const firstThreeGroups = groups.slice(0, 3)

export const GroupsItem: React.FC<GroupsItemType> = ({ onClickHandler }) => {
  const [showItems, setShowItems] = useState(false)

  const clickHandler = () => {
    //useCallback
    setShowItems(!showItems)

    if (onClickHandler) {
      onClickHandler(showItems)
    }
  }

  return (
    <>
      {(showItems ? groups : firstThreeGroups).map((item, index) => {
        return (
          <ul key={index} className={styles.groupsList}>
            <li className={styles.groupsItem}>
              <GroupItem
                title={item.title}
                confirmation={item.confirmation}
                description={item.description}
                images={item.images}
                promoted={item.promoted}
                promotedIcon={item.promotedIcon}
              />
              <Button />
            </li>
          </ul>
        )
      })}
      <button type="button" className={styles.showLink} onClick={clickHandler}>
        Show more
      </button>
    </>
  )
}

export default GroupsItem
