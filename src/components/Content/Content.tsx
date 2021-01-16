import React, { FC } from "react"
import { Route, Switch } from "react-router-dom"
import { Profile } from "./Profile/Profile"
import { Bookmarks } from "./Bookmarks/Bookmarks"

import { postProps } from "../../App"

export type props = {
  postNews: postProps[]
  SetPostNews: (value: postProps[]) => void
}

export const Content: FC<props> = React.memo(({ postNews, SetPostNews }) => {
  return (
    <Switch>
      <Switch>
        <Route
          path="/"
          component={() => <Profile postNews={postNews} SetPostNews={SetPostNews} />}
          exact
        />
        <Route
          path="/Profile"
          component={() => <Profile postNews={postNews} SetPostNews={SetPostNews} />}
          exact
        />
        <Route
          path="/Bookmarks"
          component={() => <Bookmarks postNews={postNews} SetPostNews={SetPostNews} />}
          exact
        />
      </Switch>
    </Switch>
  )
})
