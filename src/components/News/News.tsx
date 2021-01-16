import React, { FC } from "react"
import styles from "./news.module.css"
import avatar from "../../images/png/Bitmap.png"
import post from "../../images/jpg/Bitmap.jpg"
import path from "../../images/svg/Path.svg"
import comment from "../../images/svg/post/comment.svg"
import link from "../../images/svg/link.svg"
import retweet from "../../images/svg/post/retweet.svg"
import like from "../../images/svg/post/like.svg"
import share from "../../images/svg/post/share.svg"
import statistics from "../../images/svg/post/statistics.svg"

import { postProps } from "../../App"
import { Post } from "./Post"

export const postNavSvg = [comment, retweet, like, share, statistics]

type props = {
  postNews: postProps[]
  SetPostNews: (value: postProps[]) => void
}

export const News: FC<props> = ({ postNews, SetPostNews }) => {
  return (
    <>
      <section className={styles.news}>
        <ul className={styles.news}>
          {postNews.map((post) => (
            <li key={post.id}>
              <Post post={post} SetPostNews={SetPostNews} />
            </li>
          ))}
        </ul>

        {/* TEMPLATE */}

        <div className={styles.newsWrapper}>
          <div className={styles.priv}>
            <img src={avatar} alt="avatar" className={styles.newsAvatar} />
            <h2 className={styles.nortwest}>Northwest Agency</h2>
            <p className={styles.agency}>@NorthwestAgency</p>
            <p className={styles.data}>
              · Feb 24
              <img src={path} alt="path" />
            </p>
          </div>
          <p className={styles.selected}>
            Proud to be selected for the <span>#siteoftheday</span> award by
            <span>@designnominees</span>
          </p>
          <div className={styles.postWrapper}>
            <img src={post} alt="post" className={styles.postImg} />
            <h3 className="digital">Northwest Creative Digital Agency</h3>
            <p className={styles.digitalItem}>
              Design and development agency that promotes innovation in companies through elevated
              websites, applications, and eCommerce...
            </p>
            <p className={styles.digitalItem}>
              <img src={link} alt="link" />
              designnominees.com
            </p>
          </div>
          <nav>
            <ul className={styles.postNav}>
              {postNavSvg.map((item, index) => {
                if (item === "/static/media/like.c755a9fe.svg") {
                  return (
                    <li key={index} className={styles.liLike}>
                      <button type="button">
                        <img src={item} alt={`${index}`} />
                      </button>
                      <span>{""}</span>
                    </li>
                  )
                }
                return (
                  <li key={index} className={styles.liLike}>
                    <button type="button">
                      <img src={item} alt={`${index}`} />
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
