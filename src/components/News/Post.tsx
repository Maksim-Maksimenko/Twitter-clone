import React, { FC } from "react"
import styles from "./news.module.css"
import avatar from "../../images/png/Bitmap.png"
import comment from "../../images/svg/post/comment.svg"
import retweet from "../../images/svg/post/retweet.svg"
import like from "../../images/svg/post/like.svg"
import share from "../../images/svg/post/share.svg"
import statistics from "../../images/svg/post/statistics.svg"
import { Like } from "./like"
import { postProps } from "../../App"

export const postNavSvg = [comment, retweet, like, share, statistics]

type props = {
  post: postProps
  SetPostNews: (value: postProps[]) => void
}

export const Post: FC<props> = ({ post, SetPostNews }) => {
  return (
    <>
      <div key={post.id} className={styles.newsWrapper}>
        <div className={styles.priv}>
          <img src={avatar} alt="avatar" className={styles.newsAvatar} />
          <h2 className={styles.nortwest}>Northwest Agency</h2>
        </div>
        <div className={styles.postWrapper}>
          <p className={styles.digitalItem}>{post.value}</p>
        </div>
        <Like SetPostNews={SetPostNews} post={post} id={post.id} />
      </div>
    </>
  )
}
