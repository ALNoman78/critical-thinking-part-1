// const time = performance.now()

// for(let p = 0; p <= 5000; p++){
//     console.log(p);
// }

// const endTime= performance.now()

// console.log(`This is the process time of data ${endTime - time} ms` );


const firstUser = [];
const secondUser = [];


console.time("mainTime")

for(let i = 0; i < 500000; i++){
    if( i < 300000){
        firstUser.push(i)
    }
    secondUser.push(i)
}

console.timeEnd("mainTime")
// console.log('first user' , firstUser.length);
// console.log('second user' , secondUser.length);


console.time("First Array time")
const firstArrayTest = firstUser.map((number) => ({userId : number}))
console.timeEnd("First Array time")

console.time("second array process time")
const secondUserArray = secondUser.map((number) => ({ userId: number}))
console.timeEnd("second array process time")


console.time("find")
// const firstArrayFind = firstUser.find((find) => ({userId : find}))
const lengthById = firstArrayTest[5000]
console.timeEnd("find")