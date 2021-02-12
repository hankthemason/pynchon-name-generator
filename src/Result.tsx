import React, { useState } from 'react'

interface Props {
  pageState: any;
  setPageState: any;
  generateName: GenerateName
}

export const Result = ( { pageState, setPageState, generateName }: Props) => {

  const { makeName, resultHidden } = pageState
  const [pynchonName, setPynchonName] = useState<string>('')
  console.log(pageState)
  if (makeName === true) {
    setPynchonName(generateName())
    pageState.makeName = false
  }
  return resultHidden != true ? (
    <div>
      {console.log('hi')}
      Your name is: {pynchonName}
    </div>
  ) : null
}