import React, { FC } from "react"

import styles from "./groupItem.module.css"

type GroupsItemPropsType = {
  title: string
  confirmation?: string
  description: string
  images: string
  promotedIcon?: string
  promoted?: string
}

export const GroupItem: FC<GroupsItemPropsType> = React.memo(
  ({ title, confirmation, description, images, promotedIcon, promoted }) => {
    return (
      <>
        <img className={styles.titleImages} src={images} alt={images} />
        <div>
          <div className={styles.groupsName}>
            <h3>
              {title}
              {confirmation ? (
                <img className={styles.confirmation} src={confirmation} alt={confirmation} />
              ) : (
                ""
              )}
            </h3>
            <p>{description}</p>
          </div>
          <p>
            {promoted ? <img src={promotedIcon} alt={promotedIcon} /> : ""}
            {promoted}
          </p>
        </div>
      </>
    )
  }
)
