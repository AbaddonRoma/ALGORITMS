const array = [0, 4, 6, 1, 5, 7, 10, 2, 9, 8, -1, 23, 6, 35, 10, 3, -2, 32];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count++;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

console.log("SelectionSorted Array: ", selectionSort(array));
console.log('Count = ', count);
