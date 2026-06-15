function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];

console.log("Index of 7:", linearSearch(arr, 7));
console.log("Index of 100:", linearSearch(arr, 100));
