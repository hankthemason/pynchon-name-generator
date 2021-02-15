import React, { useState, Dispatch, SetStateAction } from 'react'
import { ValidateForm } from './ValidateForm'

interface Props {
  pageState: PageState,
  setPageState: Dispatch<SetStateAction<PageState>>
}

export const UserNameInputForm = ({ pageState, setPageState }: Props) => {

  const [inputText, setInputText] = useState<string>('')
  
  return (
    <form>
      <input 
        type="text" 
        value={inputText} 
        onChange={e => {setInputText(e.target.value)}}
        placeholder={"your name"}
      />
      <button
        type="submit"
        value={inputText}
        onClick={e => {
          e.preventDefault()
          if (ValidateForm(inputText)) {
            setPageState({
              ...pageState,
              userName: inputText,
              resultHidden: false, 
              clicked: true,
              showError: false
            })
          } else {
            setPageState({
              ...pageState,
              resultHidden: true,
              showError: true
            })
          }
        }}
      >
        submit
      </button>
    </form>
  )
}