import React, { useState, useEffect } from 'react';
import './App.css';
import { UserNameInputForm } from './UserNameInputForm'
import { Result } from './Result'
import { GenName } from './GenerateName'
import { FetchJson } from './FetchJson'

function App() {

  let generateName: GenerateName = GenName
  
  const [characterList, setCharacterList] = useState<any>()
  const [pageState, setPageState] = useState<PageState>({
    result: '',
    resultHidden: true,
    name: ''
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
    if (characterList != undefined) {
      setPageState({
        ...pageState,
        name: generateName(characterList)
      })
    }
  }, [pageState.result])
  
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
    </div>
  )
}

export default App;
