import React, { FC, Suspense, lazy, useState } from "react"
import styles from "./button.module.css"
import { Route, Switch } from "react-router-dom"

const PopupTweet = lazy(() => import("../../../PopupTweet/PopupTweet"))

type props = {
  addPost: (value: string) => void
}

export const Button: FC<props> = React.memo(({ addPost }) => {
  const [popup, setPopup] = useState(false)

  const suspension = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={() => <PopupTweet setPopup={setPopup} addPost={addPost} />} />
        </Switch>
      </Suspense>
    )
  }

  const onClick = () => {
    setPopup((prev) => !prev)
  }

  return (
    <>
      <button type="button" className={styles.btnFont} data-testid="testBtn" onClick={onClick}>
        Tweet
      </button>
      {popup ? suspension() : null}
    </>
  )
})
