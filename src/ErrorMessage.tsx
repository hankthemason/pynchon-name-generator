export const ErrorMessage = ({error}: ErrorProps) => {
  return (
    error === 'name' ?
    <div>invalid entry. please use only letters a-z in your name.</div> : 
    <div>invalid entry. please enter either one pronoun or your preferred pronouns separated by a '/'</div>
  )
}