// // Code your solution here
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(array, name) {return array.filter(x=>name.toUpperCase()===x.toUpperCase())} 
// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(array, begLetters){return array.filter(name=>name.slice(0,3).includes(begLetters))}
// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(objArray, name) { return objArray.filter(element=>element.name===name)}