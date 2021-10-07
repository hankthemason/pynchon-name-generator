# Pynchon-Name-Generator
![pynchoname](https://user-images.githubusercontent.com/42900752/136457645-28e2edd8-3254-48a3-9730-192e18401058.png)

Simple and minimal front-end app that generates a random name and description in the style of author [Thomas Pynchon](https://en.wikipedia.org/wiki/Thomas_Pynchon), based on a user's input.

## Getting started

1. Clone this repo and navigate to the directory
2. Install dependencies: `npm install`
3. Start up the app: `npm run start` 
4. navigate to http://localhost:3000 in your web browser

## Contributing

Although this project was built primary for personal and educational purposes, suggestions, issues, and contributions are welcome!

```
1. Create an issue
2. Fork the repo
3. Create a branch
4. Make your changes
5. Commit changes
6. Make a pull request
```

## Data source

Some people have asked what the sources of data were for the names and descriptions used in this project.  Unfortunately, at the time of building this project, there was no comprehensive list of Thomas Pynchon character names that I was aware of.  The names and descriptions were compiled manually, stored in .csv files (see `/data`), and read into the app through a script (`csvReader.js`)  

## Built With

* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)

## License

This project is licensed under the MIT License Copyright (c) 2021.

See LICENSE for more info.
