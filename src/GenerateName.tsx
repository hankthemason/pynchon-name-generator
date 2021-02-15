import React, { useEffect } from 'react';
import { HighlightSpanKind } from 'typescript';

const cleanName = (name: string): string => {
  return name.slice(0, 1).toUpperCase().concat(name.slice(1, name.length).toLowerCase())
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

export const GenName = (input: string, names: []) => {
  let num: number = Math.floor(Math.random() * names.length)
  let result: string = 'hi'
  const inputSplit: string[] = input.split(' ')
  for (var i = 0; i < inputSplit.length; i++) {
    inputSplit[i] = cleanName(inputSplit[i])
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
    console.log('hi')
    result = `${inputSplit[0]} ${getRandomName(1, names)}`
  }
  
  return result

}