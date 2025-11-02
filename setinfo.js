const arr = ["Person1", "Person2", "Person3", "Person1"] // new array perform with set method

const set = new Set(arr); // added array

const setToArray = Array.from(set) // create to a normal array

setToArray.push("Person5") // this two thing doesn't show because they don't even exist in my original array
setToArray.push("Tomato")

const setHas = set.has("Tomato")

console.log(setHas);

// console.log(setToArray)