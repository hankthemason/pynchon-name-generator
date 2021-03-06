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
    userInputPronouns: '',
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
      if (pageState.descriptionHidden === true) {
        setPageState({
          ...pageState,
          result: generateName(pageState.userName, nameData),
          nameClicked: false
        })
      } else {
        //the case where a description has already been generated and the user is changing their name
        setPageState({
          ...pageState,
          result: generateName(pageState.userName, nameData),
          nameClicked: false,
          descriptionHidden: true,
          pronounsHidden: true,
          userPronouns: null,
          description: '',
          userInputPronouns: '',
        })
      }
    }

  }, [pageState.nameClicked])

  //generate description
  useEffect(() => {
    if (pageState.userPronouns && pageState.descriptionClicked === true) {
      setPageState({
        ...pageState,
        showPronounsError: false,
        description: generateDescription(pageState.result, pageState.userPronouns),
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
