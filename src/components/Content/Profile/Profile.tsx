import React, { FC } from "react"
import { postProps } from "../../../App"

import { BrowserRouter as Router } from "react-router-dom"
import { ProfileInfo } from "./components/ProfileInfo/ProfileInfo"
import { ProfileNav } from "./components/ProfileNav/ProfileNav"
import { ProfileContent } from "./components/ProfileContent/ProfileContent"

type props = {
  SetPostNews: (value: postProps[]) => void
  postNews: postProps[]
}

export const Profile: FC<props> = React.memo(({ postNews, SetPostNews }) => {
  return (
    <>
      <ProfileInfo />
      <Router>
        <ProfileNav />
        <ProfileContent postNews={postNews} SetPostNews={SetPostNews} />
      </Router>
    </>
  )
})
