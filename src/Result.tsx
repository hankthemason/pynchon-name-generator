import React, { useState, useEffect } from 'react'

interface Props {
  pageState: any;
  setPageState: any;
}

export const Result = ( { pageState, setPageState}: Props) => {

  let { result, resultHidden, userName } = pageState
  let [newName, setNewName] = useState()
  
  return (
    resultHidden === false ? (
      <div>
        your name is: <strong>{result}</strong>
      </div>
    ) : null
  )
}