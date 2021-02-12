import React, { useEffect } from 'react';

const names: string[] = [
  "Mucho Maas",
  "Mike Fallopian",
  "Herbert Stencil"
]

export const GenName = () => {

  const num: number = Math.floor(Math.random() * 3)
  const name: string = names[num]
  return name

}