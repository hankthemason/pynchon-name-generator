import React, { useState, Dispatch, SetStateAction } from 'react'
import { useEffect } from 'react-dom/node_modules/@types/react'

interface Props {
  pageState: any;
  setPageState: any;
}

export const UserNameInputForm = ({ pageState, setPageState }: Props) => {

  let { makeName, resultHidden } = pageState
  const [inputText, setInputText] = useState<string>('')

  
  
  return (
    <form>
      <input 
        type="text" 
        value={inputText} 
        onChange={e => {setInputText(e.target.value)}}
      />
      <button
        type="submit"
        value={inputText}
        onClick={e => {
          e.preventDefault()
          if (resultHidden === true) {
            pageState.resultHidden = false
          }
          pageState.makeName = true
        }}
      >
        submit
      </button>
    </form>
  )
}