    const arr = [
    "apple",
    "banana",
    "orange",
    "apple",
    "mango",
    "grape",
    "pineapple",
    "strawberry",
    "watermelon",
    "kiwi",
    "pear",
    "cherry",
    "banana",
    "blueberry",
    "orange",
    "papaya",
    "lemon",
    "peach",
    "plum",
    "apple"
    ];

    // console.log(arr.length)

    // use normal array method

    console.time("array")
    const removeDuplicationArr = (arr) => {
        const newArr = []
        arr.forEach((element) => {
            if(!newArr.includes(element)){
                newArr.push(element)
            }
        })
        return newArr;
    }
    const test = removeDuplicationArr(arr)
    console.timeEnd("array")

    // console.log(test)
    
    // set method

    console.time("set")
        const removeUseSet = (arr) => {
        const set = new Set(arr);

        // console.log(set)
        return Array.from(set)
    }
    console.timeEnd("set")

    // console.log(removeUseSet(arr))