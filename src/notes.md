1. 2/11/2021: In order to pass React hooks as props, you need to type the props correctly.  In my case,
	      I was trying to pass in a 'SetState' hook ('setResultHidden' as a prop, and TypeScript 
	      didn't like it. To fix this, I went into my 'types' file and imported { Dispatch, 
	      SetStateAction } from React.  Then I typed 'setResultHidden' to: 'Dispatch<SetStateAction<boolean>>'.  
