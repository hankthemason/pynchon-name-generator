import { useState } from 'react'
import { ValidateName } from './Validators'


export const UserNameInputForm = ({ pageState, setPageState }: UserNameInputFormProps) => {

  const [inputText, setInputText] = useState<string>('')
  
  return (
    <div>
      enter your name:
    
      <form className='form'>
        <input
          id="nameInput" 
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
            if (ValidateName(inputText)) {
              setPageState({
                ...pageState,
                userName: inputText,
                resultHidden: false,
                descriptionButtonHidden: false,
                nameClicked: true,
                showNameError: false
              })
            } else {
              setPageState({
                ...pageState,
                resultHidden: true,
                showNameError: true
              })
            }
          }}
        >
          submit
        </button>
      </form>
    </div>
  )
}