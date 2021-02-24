import React, { useState, useEffect } from 'react';
import './App.css';
import { UserNameInputForm } from './UserNameInputForm'
import { Result } from './Result'
import { GenName } from './GenerateName'
import { ErrorMessage } from './ErrorMessage'
import { FetchMultiple } from './API'
import { GetDescription } from './GetDescription'
import { GenerateDescription } from './GenerateDescription'
import { Description } from './Description'

const filenames:Filenames = ['characters', 'nicknames', 'prefixes']

function App() {

  let generateName: GenerateName = GenName
  let generateDescription = GenerateDescription;
  
  const [nameData, setNameData] = useState<NameData>()
  const [descriptionData, setDescriptionData] = useState('yo')

  const [pageState, setPageState] = useState<PageState>({
    userName: '',
    userPronouns: null,
    resultHidden: true,
    descriptionButtonHidden: true,
    pronounsHidden: true,
    descriptionHidden: true,
    result: '',
    nameClicked: false,
    showNameError: false,
    showPronounsError: false,
    description: '',
    descriptionClicked: false,

  })

  //On page render, fetch all character names, nicknames, and prefixes (nameData)
  //Also fetch description data
  useEffect(() => {
    FetchMultiple(filenames)
    .then(result => setNameData(result))
    .catch(error => {
      console.error(error)
    })
  }, [])

  //generate name
  useEffect(() => {

    if (nameData && pageState.nameClicked === true) {
      setPageState({
        ...pageState,
        result: generateName(pageState.userName, nameData),
        nameClicked: false
      })
    }

  }, [pageState.nameClicked])

  //generate description
  useEffect(() => {

    if (descriptionData && pageState.userPronouns && pageState.descriptionClicked === true) {
      setPageState({
        ...pageState,
        description: generateDescription(pageState.result, pageState.userPronouns, descriptionData),
        descriptionClicked: false
      })
    }

  }, [pageState.descriptionClicked])
  
  return (
    <div className='page-container'>
      <div className='welcome'>
        welcome to the Thomas Pynchon name generator
      </div>
      <div className='user-input'>
        <UserNameInputForm pageState={pageState} setPageState={setPageState}/>
        <Result pageState={pageState} setPageState={setPageState} />
        {pageState.showNameError === true ? (
          <ErrorMessage error='name'/>
        ): null}
        <GetDescription pageState={pageState} setPageState={setPageState}/>
        {pageState.showPronounsError === true ? (
          <ErrorMessage error='pronouns'/>
        ): null}
        <Description pageState={pageState} setPageState={setPageState}/>
      </div>
    </div>
  )
}

export default App;
