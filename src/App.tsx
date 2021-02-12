import React, { useState, useEffect } from 'react';
import './App.css';
import { UserNameInputForm } from './UserNameInputForm'
import { Result } from './Result'
import { GenName } from './GenerateName'
import { FetchJson } from './FetchJson'

interface PageState {
  makeName: boolean;
  resultHidden: boolean;
}

function App() {

  const [pageState, setPageState] = useState<PageState>()

  useEffect(() => {
    setPageState({
      makeName: false,
      resultHidden: true
    })
  }, [])

  const generateName: GenerateName = GenName

  useEffect(() => {
    FetchJson('characters')
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      /* show error message */
    })
  }, [])
  
  return (
    pageState ?
    <div>
      welcome to the Thomas Pynchon name generator
      <br></br>
      enter your name:
      <UserNameInputForm 
        pageState={pageState}
        setPageState={setPageState}
      />
      <Result
        pageState={pageState}
        setPageState={setPageState}
        generateName={generateName}/>
    </div> : null
  )
}

export default App;
