function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === n) {
            return mid;
        } else if (arr[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


const arr = [1, 3, 5, 7, 9, 11, 13, 15];

console.log("Index of 7:", binarySearch(arr, 7));
console.log("Index of 100:", binarySearch(arr, 100));
