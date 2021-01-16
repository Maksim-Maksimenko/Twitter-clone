import React, { FC, useState, useCallback, useEffect } from "react"

import { Nav } from "./components/Nav/Nav"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Content } from "./components/Content/Content"

import styles from "./App.module.css"

export type postProps = {
  value: string
  id: number
  isFlagLike: boolean
}

export const App: FC = React.memo(() => {
  const [postNews, SetPostNews] = useState<postProps[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("post") || "[]") as postProps[]
    SetPostNews(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(postNews))
  }, [postNews])

  const addPost = useCallback((value: string) => {
    const newPost: postProps = {
      value: value,
      isFlagLike: false,
      id: Date.now()
    }

    SetPostNews((prev) => [newPost, ...prev])
  }, [])

  return (
    <main className={styles.main}>
      <Nav addPost={addPost} />
      <section className={styles.list}>
        <Content postNews={postNews} SetPostNews={SetPostNews} />
      </section>
      <Sidebar />
    </main>
  )
})
