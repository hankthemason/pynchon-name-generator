interface Props {
  pageState: any;
  setPageState: any;
}

export const Result = ( { pageState, setPageState}: Props) => {

  let { result, resultHidden } = pageState
  
  return (
    resultHidden === false ? (
      <div className='result-name'>
        your Pynchon name is: 
        <br></br>
        <strong>{result}</strong>
      </div>
    ) : null
  )
}