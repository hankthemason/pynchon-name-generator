const csv = require('csvtojson')
const fs = require('fs')
var async = require('async');

const charFilePath='./data/pynchon_characters.csv'
const prefixFilePath='./data/pynchon_prefixes.csv'
const nicknameFilePath='./data/pynchon_nicknames.csv'

async function getCharacters() {
  const characters = await csv().fromFile(charFilePath)
  return characters
}

async function getPrefixes() {
  const prefixes = await csv().fromFile(prefixFilePath)
  return prefixes
}

async function getNicknames() {
  const nicknames = await csv().fromFile(nicknameFilePath)
  return nicknames
}

//getCharacters().then(JSON.stringify).then(fs.writeFile('./data/characters.json'))

(async () => {
  const characters = await csv().fromFile(charFilePath).then(JSON.stringify)
  
  fs.writeFile('./public/data/characters', characters, (error) => {
    if(error) console.log('error', error);
  })

  const prefixes = await csv().fromFile(prefixFilePath).then(JSON.stringify)

  fs.writeFile('./public/data/prefixes', prefixes, (error) => {
    if(error) console.log('error', error);
  })

  let nicknames = await csv().fromFile(nicknameFilePath)
  console.log(nicknames)
  for (var i = 0; i < nicknames.length; i++) {
    nicknames[i].nickname = nicknames[i].nickname.replace(/"/g,"")
  }
  nicknames = JSON.stringify(nicknames)

  fs.writeFile('./public/data/nicknames', nicknames, (error) => {
    if(error) console.log('error', error);
  })

})();
  
  


