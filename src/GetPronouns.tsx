export const GetPronouns = (userInput: string): {} => {
  userInput = userInput.toLowerCase()
  
  let pronounsObj: PronounsObj = {
    subjective: '',
    objective: '',
    possessive: '', 
  }

  const malePronouns: PronounsObj = {
    subjective: 'he',
    objective: 'him',
    possessive: 'his'
  }

  const femalePronouns: PronounsObj = {
    subjective: 'she',
    objective: 'her',
    possessive: 'her'
  }

  const neutralPronouns: PronounsObj = {
    subjective: 'they',
    objective: 'them',
    possessive: 'their'
  }
  
  //if the user input is formatted with slashes
  if (userInput.includes('/')) {
    let pronounsArr = userInput.split('/')
    pronounsObj.subjective = pronounsArr[0]
    pronounsObj.objective = pronounsArr[1]
    //if user includes possessive form
    if (pronounsArr.length > 2) {
      pronounsObj.possessive = pronounsArr[2]
    } else {
    //otherwise infer possessive form
      if (pronounsArr[0] === 'he') {
        pronounsObj.possessive = 'his'
      } else if (pronounsArr[0] === 'she') {
        pronounsObj.possessive = 'her'
      } else {
        pronounsObj.possessive = 'their'
      } 
    }
  } else {
  //non slash format
    let pronounsArr = userInput.split(' ')
    pronounsObj.subjective = pronounsArr[0]
    //if only one pronoun is included
    if (pronounsArr.length === 1) {
      if (pronounsArr[0] === 'he') {
        pronounsObj = malePronouns
      } else if (pronounsArr[0] === 'she') {
        pronounsObj = femalePronouns
      } else if (pronounsArr[0] === 'they') {
        pronounsObj = neutralPronouns
      } else {
        pronounsObj.objective = 'them'
        pronounsObj.possessive = 'their'
      }
    } else if (pronounsArr.length === 2) {
      pronounsObj.objective = pronounsArr[1]
        if (pronounsArr[0] === 'he') {
          pronounsObj.possessive = malePronouns.possessive
        } else if (pronounsArr[0] === 'she') {
          pronounsObj.possessive = femalePronouns.possessive
        } else if (pronounsArr[0] === 'they') {
          pronounsObj.possessive = neutralPronouns.possessive
        } else {
          pronounsObj.possessive = 'their'
        }
    } else if (pronounsArr.length > 2) {
      pronounsObj.objective = pronounsArr[1]
      pronounsObj.possessive = pronounsArr[2]
    }
  }
  return pronounsObj
}