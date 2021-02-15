import React, { useState, useEffect } from 'react';
import './App.css';
import { UserNameInputForm } from './UserNameInputForm'
import { Result } from './Result'
import { GenName } from './GenerateName'
import { ErrorMessage } from './ErrorMessage'
import { FetchJson } from './FetchJson'

function App() {

  let generateName: GenerateName = GenName
  
  const [characterList, setCharacterList] = useState<any>()
  const [pageState, setPageState] = useState<PageState>({
    userName: '',
    resultHidden: true,
    result: '',
    clicked: false,
    showError: false
  })

  useEffect(() => {
    FetchJson('characters')
    .then(result => {
      setCharacterList(result)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  useEffect(() => {
  
    if (characterList && pageState.clicked === true) {
      setPageState({
        ...pageState,
        result: generateName(pageState.userName, characterList),
        clicked: false
      })
    }
    
  }, [pageState.clicked])
  
  return (
    <div>
      welcome to the Thomas Pynchon name generator
      <br></br>
      enter your name:
      <UserNameInputForm pageState={pageState} setPageState={setPageState}/>
      <Result 
        pageState={pageState} 
        setPageState={setPageState} 
      />
      {pageState.showError === true ? (
        <ErrorMessage />
      ): null}
    </div>
  )
}

export default App;
