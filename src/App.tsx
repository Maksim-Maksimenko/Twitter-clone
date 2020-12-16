import React, { FC } from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, Router } from 'react-router-dom'

import './App.css' // написать модули

import { Nav } from './components/Nav/Nav'
import { Profile } from './components/Profile/Profile' //вопросики
import { ProfileNav } from './components/ProfileNav/ProfileNav'
import { News } from './components/News/News'
import { Sidebar } from './components/Sidebar/Sidebar'
import { TweetsAndRepliesTest } from './components/ProfileNav/componentsTest/TweetsAndRepliesTest'
import { LikesTest } from './components/ProfileNav/componentsTest/LikesTest'
import { MediaTest } from './components/ProfileNav/componentsTest/MediaTest'

const browserHistory = createBrowserHistory()

const App: FC = () => {
  return (
    <>
      <main className="main">
        <Router history={browserHistory}>
          <Nav />
          <section className="list">
            <Profile />
            <ProfileNav />
            <Switch>
              <Route path="/" component={News} exact />
              <Route path="/Tweets" component={News} exact />
              <Route path="/Tweets and replies" component={TweetsAndRepliesTest} />
              <Route path="/Likes" component={LikesTest} />
              <Route path="/Media" component={MediaTest} />
            </Switch>
          </section>
          <Sidebar />
        </Router>
      </main>
    </>
  )
}

export default App
