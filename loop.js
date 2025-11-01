// const startTime = performance.now()

// for(let i=0; i < 5000; i++){
//     console.log(i);
// }

// const endTime = performance.now()

// console.log(`This code execuation took ${endTime - startTime} ms`)

// another way to explore

const firstArray = []
const secondArray = []  

for(let i=0; i < 600000; i++){
    if( i <= 300000){
        firstArray.push(i)
    }
        secondArray.push(i)
}

console.log("First array", firstArray.length)
console.log("second array", secondArray.length)


// console.time("map1")
// const userFirstData = firstArray.map( number => ({ userId: number}))
// console.timeEnd("map1")

// console.time("map2")
// const userSecondArray = secondArray.map( (secondNumber) => ({ secUser : secondNumber}))
// console.timeEnd("map2")

// console.time("find")
// const firstUserList = firstArray.find((number) => ({userId : number}))
// console.timeEnd("find")

const anotherUser = secondArray.map((user) => ({userId : user}))

console.time("find2")
// const secondUserList = secondArray.find( secondUser => secondUser.userId === 300000 ) // .userId can be anything so don't worry 
const userList = anotherUser[300000]
console.timeEnd("find2")