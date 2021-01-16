import React, { useState, useCallback, FC } from "react"

import styles from "./input.module.css"

export const InputSearch: FC = React.memo(() => {
  const [value, setValue] = useState("")

  const ChangeEvent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const KeyPressHandler = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        console.log(value)
        setValue("")
      }
    },
    [value]
  )

  return (
    <>
      <label>
        <span className={styles.visuallyHidden}>seaerch</span>
        <input
          type="text"
          placeholder="Search Twitter"
          className={styles.inputSearch}
          value={value}
          onKeyPress={KeyPressHandler}
          onChange={ChangeEvent}
          data-testid="input"
          id="check"
        />
      </label>
    </>
  )
})
