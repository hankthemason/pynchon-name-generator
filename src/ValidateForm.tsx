import React from 'react';

export const ValidateForm = (form: string) => {
  let reg = /^[a-zA-Z\s]*$/;
  
  return reg.test(form)
}