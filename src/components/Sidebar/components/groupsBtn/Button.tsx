import React, { useState, FC, useCallback } from 'react'

import styles from './button.module.css'

type ClickType = {
  onClick?: (isFlag: boolean) => void
}

export const Button: FC<ClickType> = ({ onClick }) => {
  const [buttonFollow, setButtonFollow] = useState(false)

  const onClickHandler = useCallback(() => {
    setButtonFollow((previousState) => !previousState)

    if (onClick) {
      onClick(buttonFollow)
    }
  }, [buttonFollow, onClick])

  return (
    <>
      <button
        type="button"
        className={buttonFollow ? styles.groupsBtnActive : styles.groupsBtn}
        onClick={onClickHandler}
      >
        {buttonFollow ? 'Subs...' : 'Follow'}
      </button>
    </>
  )
}

export default Button
