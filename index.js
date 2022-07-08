const characters = require('./data/swapi');

/**
 * listAllCharacters()
 * --------------------
 * Returns all character names from an array of characters. If the inputted array is empty, returns 0.
 * @param {Object[] characters} - an array of movie characters
 * @returns {string[]} an array of strings, which are character names
 *
 *
 * EXAMPLE:
 * 
 * listAllCharacters([])
 * 
 * //> 0
 * 
 * 
 * 
 * listAllCharacters(characters);
 *
 * //> [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Biggs Darklighter',
  'Obi-Wan Kenobi'
   ];
 *
 */

function listAllCharacters() {}

// UnComment the two lines below to test
// console.log(listAllCharacters([]));
// console.log(listAllCharacters(characters));

/**
 * averageHeightOfAllCharacters()
 * -------------------------------
 * Returns the average height of all of the listed characters
 * @param {Object[] characters} - an array of movie characters
 * @returns {number} - a number representing the average height
 *
 */

function averageHeightOfAllCharacters() {}

//Uncomment the line below to test the function
//console.log(averageHeightOfAllCharacters(characters))

/**
 * countByEyeColor()
 * -------------------
 * Returns an object where the keys are the eye colors and the values are number of characters with that eye color. If the inputted array is empty, return 'Nothing to check.'
 * @param {Object[] characters} - an array of movie characters
 * @returns {Object} - keys are the eye colors and values are the number of characters with that eye color
 */

function countByEyeColor(chars) {}

// should return 'Nothing to check.'
// console.log(countByEyeColor([]))
// should return { blue: 3, yellow: 2, red: 2, brown: 2, 'blue-gray': 1 }
// console.log(countByEyeColor(characters));

/**
 * getAllCharactersCreatedAfterYear()
 * ------------------
 * Returns an array of all characters created on or after a certain year
 * @param {Object[] characters} - an array of movie characters
 * @param {Number} date - date to be considered for when character object was created
 * @returns {String[]} - returns an array of character names
 * EXAMPLE:
 * getAllCharactersCreatedAfterYear(characters, 2014)
 *
 * [
  'R2-D2',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Obi-Wan Kenobi'
 * ]
 * 
 * 
 *
 */

function getAllCharactersCreatedAfterYear(chars, d) {}

// UnComment line below to test
// console.log(getAllCharactersCreatedAfterYear(characters, 2014));

/** getCharactersInMovie()
 *  ------------------
 *  Returns an object of characters who were in a certain film. Their id will be the key and their name should be the value. Title should be CASE INCENSITIVE
 *  @param {Object[] characters} - an array of movie characters
 *  @param {String} - string with the title of the movie
 *  @returns {Object} - key should be the id and the value should be their name
 *
 * EXAMPLE:
 *
 * getCharacterIds(characters, 'return of the jedi')
 * 
 * //> {
   L3kdddkek: 'Luke Skywalker',
   Idkk99dkc: 'C-3PO',
   Kekk39dis: 'R2-D2',
   O894iriie: 'Darth Vader',
   Viie78949: 'Leia Organa',
   Ghfjkd998: 'Obi-Wan Kenobi'
   }
 */

function getCharactersInMovie(chars, title) {}

// Uncomment line below to test
// console.log(getCharactersInMovie(characters, 'return of the jedi'));
