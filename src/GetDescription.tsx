import { useState } from 'react'
import { ValidatePronouns } from './Validators'
import { GetPronouns } from './GetPronouns'

export const GetDescription = ({pageState, setPageState}: GetDescriptionProps) => {
  
  let { descriptionButtonHidden, pronounsHidden, descriptionHidden } = pageState
  let [pronounsInput, setpronounsInput] = useState<string>('')
  
  return (
    <div>
      <div>
        {descriptionButtonHidden != true ?
        <button
          type='button'
          value='get description'
          onClick={() => {
            if (pronounsHidden === true) {
              setPageState({
                ...pageState,
                pronounsHidden: false
              })
            }
          }}
        >get description
        </button> : null}
      </div>
      <div>
        {pronounsHidden != true ?
          <div className='user-pronouns'>
            enter your preferred pronouns (e.g. they/them, she/her, he/him, etc.)
          <form className='form'>
            <input
              id="pronounsInput" 
              type="text" 
              value={pronounsInput} 
              onChange={e => {setpronounsInput(e.target.value)}}
              placeholder={"your pronouns"}
            />
            <button
              type="submit"
              value={pronounsInput}
              onClick={e => {
                e.preventDefault()
                if (ValidatePronouns(pronounsInput)) {
                  setPageState({
                    ...pageState,
                    userPronouns: GetPronouns(pronounsInput),
                    descriptionHidden: false,
                    descriptionClicked: true
                  })
                } else {
                  setPageState({
                    ...pageState,
                    showPronounsError: true
                  })
                }
              }}
              >
              submit
            </button>
          </form>
      </div> : null}
    </div>
  </div>
  )
}