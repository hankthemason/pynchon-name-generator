import React, { useEffect, useState } from 'react'

export const FetchCharacterNames = async (file: string): Promise<CharacterName []> => {
  return fetch(`./data/${file}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const FetchNicknames = async (file: string): Promise<Nickname []> => {
  return fetch(`./data/${file}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const FetchPrefixes = async (file: string): Promise<Prefix []> => {
  return fetch(`./data/${file}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export function FetchJSON<T>(filename: string): Promise<T> {
  return fetch(`./data/${filename}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const FetchMultiple = async (filenames: string[]): Promise<NameData> => {
  return {
    characters: await FetchJSON<CharacterName []>(filenames[0]),
    nicknames: await FetchJSON<Nickname []>(filenames[1]),
    prefixes: await FetchJSON<Prefix []>(filenames[2])
  }
}