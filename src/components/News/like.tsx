import React, { FC, useCallback } from "react";

import styles from "./news.module.css";

import comment from "../../images/svg/post/comment.svg";

import retweet from "../../images/svg/post/retweet.svg";
import like from "../../images/svg/post/like.svg";
import share from "../../images/svg/post/share.svg";
import statistics from "../../images/svg/post/statistics.svg";
import { postProps } from "../../App";

export const postNavSvg = [comment, retweet, like, share, statistics];

type props = {
  SetPostNews: any;
  id: number;
  post: postProps;
};

export const Like: FC<props> = ({ SetPostNews, id, post }) => {
  const counterLike = 1;

  const toggle = useCallback(
    (id: number) => {
      SetPostNews((prev: any) =>
        prev.map((post: any) => {
          return {
            ...post,
            isFlagLike: post.id === id ? !post.isFlagLike : post.isFlagLike,
          };
        })
      );
    },
    [SetPostNews]
  );
  return (
    <nav>
      <ul className={styles.postNav}>
        {postNavSvg.map((item, index) => {
          if (item === "/static/media/like.c755a9fe.svg") {
            return (
              <li key={item} className={styles.liLike}>
                <button
                  type="button"
                  onClick={() => {
                    toggle(id);
                  }}
                >
                  <img
                    src={item}
                    alt={`${index}`}
                    className={post.isFlagLike ? styles.itemLike : ""}
                  />
                </button>
                <span>{post.isFlagLike ? counterLike : ""}</span>
              </li>
            );
          } else {
            return (
              <li key={index} className={styles.liLike}>
                <button type="button">
                  <img src={item} alt={`${index}`} />
                </button>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};
