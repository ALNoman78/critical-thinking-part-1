const noman = {userName: "Noman"}
const nobody = {userName: "Nobody"}
const anybody = {userName: "Anybody"}


const set = new Set();

set.add(noman)
set.add(nobody)
set.add(anybody)
set.add(noman)

// set.add("apple")
// set.add("banana")
// set.add("mango") 
// set.add("apple") // you can't double entry anything there like " Apple "

console.log(set)