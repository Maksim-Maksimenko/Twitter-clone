import React, { FC } from "react"
import { postProps } from "../../../App"

import styles from "../Bookmarks/bookmarks.module.css"
import avatar from "../../../images/png/Bitmap.png"
import { Like } from "../../News/like"

type props = {
  postNews: postProps[]
  SetPostNews: (value: postProps[]) => void
}

export const Bookmarks: FC<props> = React.memo(({ postNews, SetPostNews }) => {
  return (
    <section className={styles.wrapper}>
      <section className={styles.news}>
        {postNews.map((el: any, index: any) => {
          if (el.isFlagLike === true) {
            return (
              <div key={index} className={styles.newsWrapper}>
                <div className={styles.priv}>
                  <img src={avatar} alt="avatar" className={styles.newsAvatar} />

                  <h2 className={styles.nortwest}>Northwest Agency</h2>
                </div>
                <div className={styles.postWrapper}>
                  <p className={styles.digitalItem}>{el.value}</p>
                </div>
                {/* like */}
                <Like post={el} id={el.id} SetPostNews={SetPostNews} />
              </div>
            )
          }
          return ""
        })}
      </section>
    </section>
  )
})
