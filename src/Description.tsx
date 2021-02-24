export const Description = ({pageState, setPageState}: PageComponentProps) => {
  let { description, descriptionHidden } = pageState
  
  return (
    descriptionHidden === false ? (
      <div className='description'>
        {description}
      </div>
    ) : null
  )
}