import React, { useState, useEffect } from 'react';
import './App.css';
import { UserNameInputForm } from './UserNameInputForm'
import { Result } from './Result'
import { GenName } from './GenerateName'
import { ErrorMessage } from './ErrorMessage'
import { FetchCharacterNames, FetchNicknames, FetchPrefixes, FetchJSON, FetchMultiple } from './API'

const filenames:Filenames = ['characters', 'nicknames', 'prefixes']

function App() {

  let generateName: GenerateName = GenName
  
  const [nameData, setNameData] = useState<NameData>()

  const [pageState, setPageState] = useState<PageState>({
    userName: '',
    resultHidden: true,
    result: '',
    clicked: false,
    showError: false
  })

  //On page render, fetch all character names, nicknames, and prefixes
  useEffect(() => {
    FetchMultiple(filenames)
    .then(result => setNameData(result))
    .catch(error => {
      console.error(error)
    })
  }, [])

  useEffect(() => {

    if (nameData && pageState.clicked === true) {
      setPageState({
        ...pageState,
        result: generateName(pageState.userName, nameData),
        clicked: false
      })
    }

  }, [pageState.clicked])
  
  return (
    <div className='page-container'>
      <div className='welcome'>
        welcome to the Thomas Pynchon name generator
      </div>
      <div className='user-input'>
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
    </div>
  )
}

export default App;
