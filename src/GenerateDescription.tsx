const occupations: string[] = [
  'propeller salesman',
  'psychodontist',
  'shift manager in a bandaid factory',
  'psychical detective',
  'professor of quaternion theory',
  'dairy inspector'
]

const secondaryOccupations: string[] = [
  'stevedore',
  'blackjack dealer',
  'baseball card dealer',
  'bushmeat trafficker',
  'part-time ictheologist',
  'electronics technician',
  'stenographer',
  'radar consultant',
  'fish and game administrator',
  'jockey',
]

const subtleArts: string[] = [
  'falconry',
  'sand calligraphy',
  'baroque lute-playing',
  'apiculture',
  'lepidopterology',
]

const nationalities: string[] = [
  'Congolese', 
  'Bavarian', 
  'Scottish', 
  'Guyanese', 
  'Irish', 
  'Armenian', 
  'Maltese', 
  'Egyptian', 
  'Chilean', 
  'Quebecois', 
  'Tibetan'
]

const connoisseurOf = [
  '18th century monograms',
  'forgotten Semitic languages',
  'experimental textiles',
  'pre-Columbian Mesoamerican sculpture',
  'baroque-era polyphonic musical traditions'
]

const designsFor = [
  'the modern postal stamp',
  'an early prototype of the modern electric scooter',
  'an experimental prosthetic finger',
  'a wig made from dried algae',
  'an alternative type of biplane that ran on a mixture of salt water and corn oil'
]

const convictedFor = [
  'petty larceny',
  'selling rare and exotic pets illegally',
  'bribing court officials with counterfeit silver amulets',
  'running an illegal gambling operation in a seventh day adventist church basement',
  'distributing pamphlets alleging a connection between the CIA and a certain defunct sect of Eastern Orthodox priests'
]

const crews = [
  'The Leery 7',
  'Bad Fungi',
  'The Lunar 9',
  'The House of Dale',
  'Cosa Nostradamus'
]

const territories = [
  'all along the Eastern seaboard',
  'in nearly every Gulf port',
  'from Ushuia to the Yukon',
  'all over southeastern Kansas',
  'in nearly every city beginning with the letter "W"'
]

const physicalTraits = ['porcine', 'balding', 'bovine', 'blind', 'bespectacled']
const personalityTraits = ['surly', 'reticent', 'introspective', 'shifty', 'guileless', 'doleful']
const demeanors = ['pensive', 'aloof', 'modest', 'haughty', 'grave']


const descriptors = {
  occupation: occupations,
  nationality: nationalities,
  physicalTraits: physicalTraits
}

function getRandom<T>(arr: T[], n:number=1): T[] {
  let idxArr: number[] = []
  let result: T[] = []
  
  for (var i = 0; i < n; i++) {
    let idx: number = Math.floor(Math.random() * arr.length)
    while (idxArr.includes(idx)) {
      console.log('here')
      console.log(idxArr)
      console.log(idx)
      idx = Math.floor(Math.random() * arr.length)
    }
    idxArr.push(idx)
    result.push(arr[idx])
  }
  
  return result
}

const getArticle = (s: string): string => {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u']
  const c = s.charAt(0).toLowerCase()
  const isVowel = (c: string): c is Vowel => vowels.includes(c);
  return isVowel(c) ? `an ${s}` : `a ${s}`
}

const makeNationality = (): string => {
  const n = getRandom(nationalities, 2)
  const nationality: string = `${n[0]}-${n[1]}`
  return nationality
}

const capitalizeFirstChar = (s: string): string => {
  let c = s.slice(0, 1).toUpperCase()
  s = s.slice(1, s.length)
  c = c.concat(s)
  return c

}

const conjugateHave = (pronouns: PronounsObj): string => {
  return pronouns.subjective === 'he' || pronouns.subjective === 'she' ? `${pronouns.subjective} has` : `${pronouns.subjective} have`
}

const conjugateisPast = (pronouns: PronounsObj): string => {
  return pronouns.subjective === 'he' || pronouns.subjective === 'she' ? `${pronouns.subjective} was` : `${pronouns.subjective} were`
}

const getSecondSentence = (pronouns: PronounsObj): string => {
  const sentences: string[] = []
  sentences[0] = `Since childhood ${pronouns.subjective} repaired the wall surrounding ${pronouns.possessive} desert home, mortared, carried heavy stone heavy as ${pronouns.subjective}, lifted, set in place.  Still the desert came.`
  sentences[1] = `${capitalizeFirstChar(pronouns.possessive)} demeanor was ${getRandom(demeanors)[0]}, ${pronouns.possessive} companion a connoisseur of ${getRandom(connoisseurOf)[0]}, ${pronouns.possessive} name an hommage to a distant relative who innovated designs for ${getRandom(designsFor)[0]}.`
  let occ = getRandom(secondaryOccupations, 2)
  let trait = getRandom(personalityTraits)[0]
  sentences[2] = `Born to ${getArticle(occ[0])} and ${getArticle(trait)} ${occ[1]}, ${pronouns.subjective} excelled from an early age in the subtle art of ${getRandom(subtleArts)[0]}.`
  sentences[3] = `Convicted for ${getRandom(convictedFor)[0]} at a young age, ${pronouns.subjective} subsequently turned to ${getRandom(connoisseurOf)[0]} as new target for ${pronouns.possessive} seemingly inexhaustible energies.`
  sentences[4] = `${capitalizeFirstChar(pronouns.subjective)} ran with a crew called ${getRandom(crews)[0]} who were known for ${getRandom(convictedFor)[0]} and controlled territory ${getRandom(territories)[0]}.`
  sentences[5] = `Like most violent young people - and not a few stuffy old ones - ${pronouns.subjective} found the idea of defeat hateful, and so devoted ${pronouns.objective}self to becoming a world-renowned master practitioner in ${pronouns.possessive} chosen field of ${getRandom(subtleArts)[0]}.`
  sentences[6] = `${capitalizeFirstChar(pronouns.subjective)} ${conjugateisPast(pronouns)} a Catholic; had been to a convent school near ${pronouns.possessive} home.  ${capitalizeFirstChar(pronouns.subjective)} talked overmuch about ${pronouns.possessive} religion, and had indeed for a time considered the Son of God as a young person will consider any eligible bachelor.`
  sentences[7] = `${capitalizeFirstChar(pronouns.possessive)} life's progress had been inevitably east; having somehow escaped the hothouse of ${pronouns.possessive} fellow countrymen ${pronouns.subjective} flew to the other extreme and developed an obsession with ancestral roots.  Land of God.  Land of suffering, also.  Scenes of specific persecution upset ${pronouns.objective}.`
  sentences[8] = `After emigrating to Germany, ${pronouns.subjective} became for a time the Weimar Republic’s most notorious cat burglar and doper, but after a period of success and notoriety fell into a dull life of petty crime and minor scandals.`
  sentences[9] = `${capitalizeFirstChar(pronouns.subjective)} spoke 33 languages including English with a strong Oxonian blither to it.`
  sentences[10] = `In ${pronouns.possessive} navy days ${pronouns.subjective} would periodically put on a babushka and let the members of the A gang line up in the compartment to pinch ${pronouns.possessive} cheeks.`
  sentences[11] = `${capitalizeFirstChar(pronouns.subjective)} studied composition in Paris and had gained a certain notoriety among the avant-garde in French music.  Opinion in the city was violently divided: once the composer had been loudly insulted in the street by one of the most venerable of the Post-Romantics.`
  sentences[12] = `After seminary school ${pronouns.subjective} became convinced that rats were going to take over after humanity's demise.  One night ${pronouns.subjective} climbed down into the sewer through the nearest manhole, bringing a Baltimore Catechism, ${pronouns.possessive} breviary, and for reasons nobody found out, a copy of Knight's 'Modern Seamanship'.`
  sentences[13] = `Trained as a plastic surgeon ${pronouns.subjective} referred to ${pronouns.possessive} profession as the art of Tagliacozzi.  ${capitalizeFirstChar(pronouns.possessive)} own methods, while not as primitive as those of the sixteenth-century Italian, were marked by a certain sentimental inertia, so that ${pronouns.subjective} was never quite up to date.`
  sentences[14] = `Though ${pronouns.subjective} had traveled for a number of years, being on the road had done nothing to improve ${pronouns.possessive} outward self, or the inward one either.  Though the street had claimed a big fraction of ${pronouns.possessive} age, it and ${pronouns.subjective} remained strangers in every way.`
  sentences[15] = `A recent escapee of Devil's Island, ${pronouns.subjective} ${conjugateisPast(pronouns)} now en route to Vassar under the alias of Maynard Basilisk to teach beekeeping.`
  sentences[16] = `${capitalizeFirstChar(pronouns.subjective)} could be found on weekends attending meetings with a small group of Tyrosemiophiles (collectors of labels on French cheese boxes) whom ${pronouns.subjective} met at an annual convention on this oft-overlooked but nevertheless thriving hobby.` 
  sentences[17] = `A speaker of Manx, ${pronouns.subjective} often claimed the (false) distinction of being the only Manx monoglot in the world, but any basic investigation into ${pronouns.possessive} past would instantly lay doubt to that assertion.`
  sentences[18] = `${capitalizeFirstChar(pronouns.possessive)} father was an unemployed musicologist named Petard who dedicated his life to finding the lost Vivaldi Kazoo Concerto, first brought to his attention by one Squasimodeo, formerly a civil servant under Mussolini and now lying drunk unter the piano, who had heard not only of its theft from a monastery by certain Fascist music-lovers but also about twenty bars from the slow movement, which Petard would from time to time wander around parties blowing on a plastic kazoo.`
  
  return getRandom(sentences)[0]
}

export const GenerateDescription = (name: string, pronouns: PronounsObj, data: any):string => {

  const descType: keyof Descriptor = (Object.keys(descriptors) as Array<keyof Descriptor>)[Math.floor(Math.random() * 2)]

  const occupation = getRandom(occupations)[0]
  const retired = Math.floor(Math.random() * 3) > 0 ? false : true
  const nationality = makeNationality()
  const descString = retired ? `a retired ${nationality} ${occupation}` : `${getArticle(nationality)} ${occupation}`
  const secondSentence = getSecondSentence(pronouns)

  return `${name} was ${descString}. ${secondSentence}`
}