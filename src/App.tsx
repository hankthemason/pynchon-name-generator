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
    userName: '',
    resultHidden: true,
    result: '',
    clicked: false
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
  console.log(pageState)

  useEffect(() => {
    if (characterList != undefined) {
      setPageState({
        ...pageState,
        result: generateName(characterList),
        clicked: false
      })
    }
    
  }, [pageState.clicked])
  
  console.log(pageState)
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
