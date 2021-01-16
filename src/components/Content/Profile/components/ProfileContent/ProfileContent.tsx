import React, { FC } from "react"
import { Route, Switch } from "react-router-dom"

import { News } from "../../../../News/News"
import { LikesTest } from "../ProfileNav/componentsTest/LikesTest"
import { MediaTest } from "../ProfileNav/componentsTest/MediaTest"
import { TweetsAndRepliesTest } from "../ProfileNav/componentsTest/TweetsAndRepliesTest"

import { postProps } from "../../../../../App"

type props = {
  SetPostNews: (value: postProps[]) => void
  postNews: postProps[]
}

export const ProfileContent: FC<props> = ({ SetPostNews, postNews }) => {
  return (
    <>
      <Switch>
        <Route
          path="/Tweets"
          component={() => <News postNews={postNews} SetPostNews={SetPostNews} />}
        />
        <Route
          path="/Profile"
          component={() => <News postNews={postNews} SetPostNews={SetPostNews} />}
        />
        <Route
          path="/"
          component={() => <News postNews={postNews} SetPostNews={SetPostNews} />}
          exact
        />

        <Route path="/Likes" component={() => <LikesTest />} exact />
        <Route path="/Media" component={() => <MediaTest />} exact />
        <Route path="/Tweets and replies" component={() => <TweetsAndRepliesTest />} exact />
      </Switch>
    </>
  )
}
