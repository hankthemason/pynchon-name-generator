import { useState } from 'react'
import { ValidatePronouns } from './Validators'
import { GetPronouns } from './GetPronouns'

export const GetDescription = ({pageState, setPageState}: GetDescriptionProps) => {
  
  let { descriptionButtonHidden, pronounsHidden, userInputPronouns} = pageState
  
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
              value={userInputPronouns} 
              onChange={e => {setPageState({
                ...pageState,
                userInputPronouns: e.target.value
              })}}
              placeholder={"your pronouns"}
            />
            <button
              type="submit"
              value={userInputPronouns}
              onClick={e => {
                e.preventDefault()
                if (ValidatePronouns(userInputPronouns)) {
                  setPageState({
                    ...pageState,
                    userPronouns: GetPronouns(userInputPronouns),
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