import React, { useEffect, useState } from 'react'

export const FetchJson = (file: string): Promise<string[]> => {
  return fetch(`./data/${file}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

}