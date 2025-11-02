const arr = ["Apple", 'Mango' , 'Banana', "Apple"]

const set = new Set(arr);

// set.add("tomato")

// const test = set.forEach(value => console.log(value)) [testing propose]

const test = Array.from(set) // convert to a new array set to array

test.push("Tomato", 21)
console.log(test)

// console.log(set)
// console.log(test);