const arr = ["apple", "banana", "orange", "apple"];

// brute force

console.time("array")
const removeDuplicateArr = (arr) => {
    const newArr = [];
    arr.forEach((element) => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    })
    return newArr;
};

const test = removeDuplicateArr(arr)
console.log(test);
console.timeEnd("array")




// set implementation

console.time("set")

const removeDuplicateSet = (arr) => {
    const set = new Set(arr)

    return Array.from(set)
}
console.log(removeDuplicateSet(arr));

console.timeEnd("set")