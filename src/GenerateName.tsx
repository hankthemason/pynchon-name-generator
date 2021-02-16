const cleanName = (name: string): string => {
  return name.slice(0, 1).toUpperCase().concat(name.slice(1, name.length).toLowerCase())
}

const hasNickname = (probDenominator: number, nicknames: Nickname []): string | null => {
  if (Math.floor(Math.random() * probDenominator) < 1) {
    return nicknames[Math.floor(Math.random() * nicknames.length)].nickname
  } else return null
}

const hasPrefix = (probDenominator: number, prefixes: Prefix []): string | null => {
  if (Math.floor(Math.random() * probDenominator) < 1) {
    return prefixes[Math.floor(Math.random() * prefixes.length)].prefix
  } else return null
}

const getRandomName = (whichName: number, names: CharacterName[]): string => {
  
  let nameAccessor: keyof CharacterName
  let strangeAccessor: keyof CharacterName
  
  if (whichName === 0) {
    nameAccessor = 'first_name'
    strangeAccessor = 'strange_first'
  } else {
    nameAccessor = 'last_name'
    strangeAccessor = 'strange_last'
  }
  
  let validChoices: CharacterName[] = names.filter((name: CharacterName) => name[nameAccessor] != null && name[strangeAccessor] > 0)
  let num = Math.floor(Math.random() * validChoices.length)
  
  return validChoices[num][nameAccessor]
}

export const GenName = (input: string, nameData: NameData) => {
  const { characters: names, nicknames, prefixes } = nameData

  let result
  
  const inputSplit: string[] = input.split(' ')
  for (var i = 0; i < inputSplit.length; i++) {
    inputSplit[i] = cleanName(inputSplit[i])
  }

  let probDenominator = 5

  let nickname = hasNickname(probDenominator, nicknames)
  let prefix = hasPrefix(probDenominator, prefixes)

  //can't have both nickname and prefix
  if (nickname && prefix) {
    let nicknameOrPrefix: number = Math.floor(Math.random() * 2)
    //if 0, keep nickname, else keep prefix
    nicknameOrPrefix === 0 ? prefix = null : nickname = null
  }
  
  //if the user has supplied first and last name
  if (inputSplit.length > 1) {
    //"toss a coin" to select whether the first name or last name will be altered
    //0 === first, 1 === last
    const firstOrLast: number = Math.floor(Math.random() * 2)

    //if first name is going to be altered
    if (firstOrLast === 0) {
      result = `${getRandomName(firstOrLast, names)} ${inputSplit[inputSplit.length - 1]}`
    }
    // else if last name is going to be altered
    else {
      result = `${inputSplit[0]} ${getRandomName(firstOrLast, names)}`
    }
  } 
  //if the user has only supplied first name
  else {
    result = `${inputSplit[0]} ${getRandomName(1, names)}`
  }
  
  //if nickname or prefix, add it to name
  if (nickname) {
    let arr = result.split(' ')
    arr.splice(1, 0, `"${nickname}"`)
    result = arr.join(' ')
    return result
  } else if (prefix) {
    let arr = result.split(' ')
    arr.splice(0, 0, `${prefix}`)
    result = arr.join(' ')
    return result
  } else {
    return result
  }

}