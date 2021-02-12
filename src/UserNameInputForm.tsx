import React, { useState, Dispatch, SetStateAction } from 'react'
import { useEffect } from 'react-dom/node_modules/@types/react'

interface Props {
  pageState: PageState,
  setPageState: Dispatch<SetStateAction<PageState>>
}

export const UserNameInputForm = ({ pageState, setPageState }: Props) => {
  console.log(setPageState)
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
          setPageState({
            ...pageState,
            resultHidden: false,
            result: inputText
          })
        }}
      >
        submit
      </button>
    </form>
  )
}