const array = [1, 3, 5, 2, 10, 8, 4, 6, 0, 9];
count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log('Found element: ', linearSearch(array, 4));
console.log("Count = ", count);