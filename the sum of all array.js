function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
const myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray));