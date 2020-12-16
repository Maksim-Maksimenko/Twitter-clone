import React, { useRef,FC } from 'react'

import styles from './input.module.css'

// вопросики 
// type ClickType = {
//   KeyPressHandlerSpy: (value:string) => string | void
// }

export const InputSearch: FC = () => {
	const ref = useRef<HTMLInputElement>(null)
	
	const KeyPressHandler = (e: React.KeyboardEvent) => { //useCallback
		if(e.key === 'Enter') {
      // KeyPressHandlerSpy(ref.current!.value) // вопросики 
			console.log(ref.current!.value)
			ref.current!.value = ''
    }
  }
  
  //переписать на стейт /// 

  return (
    <>
      <input
        type="text"
        placeholder="Search Twitter"
        className={styles.inputSearch}
        ref={ref}
        onKeyPress={KeyPressHandler}
        data-testid="input"
      />
    </>
  )
}

export default InputSearch
