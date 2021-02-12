import React, { useEffect } from 'react';

// const names: string[] = [
//   "Mucho Maas",
//   "Mike Fallopian",
//   "Herbert Stencil"
// ]

export const GenName = (names: []) => {
  const num: number = Math.floor(Math.random() * names.length)
  const name: any = names[num]
  const stringResult = `${name.first_name} ${name.last_name}`
  return stringResult

}