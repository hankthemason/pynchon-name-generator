import React from 'react';

export const ValidateName = (form: string) => {
  let reg = /^[a-zA-Z\s\-]*$/;
  
  return reg.test(form)
}

export const ValidatePronouns = (form: string) => {
  if (form === '') return false
  let reg = /^[a-zA-Z\/]*$/;

  return reg.test(form)
}