
function mySlice(arr, start, end = (start >= 0) ? arr.length: 0) {
    let newArr = [];
    do {
        newArr.push(arr.at(start));
        start++;
    } while (start != end); 
    return newArr;
}


let someArr = [1, 2, 3, 4, 5, 6];
console.log(mySlice(someArr, -5));
console.log(mySlice(someArr, 1));
console.log(mySlice(someArr, -5, -2));
console.log(mySlice(someArr, 1, 4));


function myIndexOf(arr, item, from = 0) {
    let index = from;
    arr = arr.slice(from, ) ;
    for (let anyItem of arr) {
        if (anyItem === item) return index;
        index++;
    }
    return "Такого элемента нет в массиве";
}


console.log(myIndexOf(someArr, 3, 1))
console.log(myIndexOf(someArr, 7, ))

function myIncludes(arr, item, from = 0) {
    arr = arr.slice(from, );
    for (let anyItem of arr) {
        if (anyItem === item) return true;
    }
    return false;
}


console.log(myIncludes(someArr, 3, 4));
console.log(myIncludes(someArr, 3,));