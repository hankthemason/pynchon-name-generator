2.15.2021

I was trying to access an object's property using variables inside of bracket notation:
	'name[nameAccessor] != null && name[strangeAccessor] > 0'
Where the type of nameAccessor and strangeAccessor was 'string'.  Typescript didn't like this and gave me the error:
"TypeScript: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'CharacterName'"

I realized this was because 'string' is too generic of a type to give object keys, and Typescript wanted a stricter type for the objectkeys, so I gave nameAccessor and strangeAccessor both types of 'keyof CharacterName' and it worked! 
