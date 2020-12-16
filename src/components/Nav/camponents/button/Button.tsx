import React, { FC, Suspense } from 'react'
import styles from './button.module.css'
import { Link, Route } from 'react-router-dom'

const Popup = React.lazy(() => import('../../../PopupTweet/PopupTweet'))

export const Button: FC = () => {
  return (
    <>
      <Link to="/popup" className={styles.btnFont}>
        Tweet
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/popup" component={Popup} />
      </Suspense>
    </>
  )
}

export default Button
