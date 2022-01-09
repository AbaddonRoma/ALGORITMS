const array = [0, 4, 6, 1, 5, 7, 10, 2, 9, 8, -1, 23, 6, 35, 10, 3, -2, 32, 41, 21, 22];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j+1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
            count++;
        }
    }
    return array;
}

console.log('length: ', array.length);
console.log('Bubble Sort: ', bubbleSort(array));
console.log('Count: ', count);
