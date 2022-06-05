// Data //
/* Creating three arrays. */
const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function () { }, () => { }, 10, 100, {}];
const exampleArray2 = [
    [10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]
]

/**
 * Point is a function that takes two arguments, x and y, and returns an object with two properties, x
 * and y, that hold the values of the arguments.
 * @param x - The x coordinate of the point.
 * @param y - The y coordinate of the point.
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// Exercises // 

/**
 * 1.- Create a function that finds the value 4 in the array exampleArray
 * You must create an algorithm using functional programming
 * You must create another algorithm using imperative programming (filter, split, reduce or any of them that manipulate arrays).
 */


/**
 * Imperative function
 * Loop through the array and return the index of the value if it exists.
 * @param array - the array to search through
 * @param value - The value we're looking for in the array
 * @returns The value '4' is on index 3
 */
function imperativeValue(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return `The value '${value}' is on index ${i}`;
        }
    }
}
console.log(`[Output with value '4': "${imperativeValue(exampleArray, 4)}]"`)

/**
 * Declarative function 
 * The function 'declarativeValue' takes an array and a value, and returns a string that says the value
 * is on the index of the array.
 * @param array - exampleArray
 * @param value - The value we're looking for in the array
 * @returns The value '443' is on index 3
 */
function declarativeValue(array, value) {
    return `The value '${value}' is on index ${array.indexOf(value)}`
}
console.log(`[Output with value '443': "${declarativeValue(exampleArray, 443)}]"`)

/**
 * 2.- Create a function that cleans up the shit array using declarative programming (split, join or any of them). 
 * The function should only leave the strings as output.
 */

/**
 * `resultStrings` is a function that takes an array as an argument and returns a new array containing
 * only the strings from the original array
 * @param array - an array of any type
 * @returns [Output: 'I', 'am', 'a', 'string']
 */
function resultStrings(array) {
    return array.filter((element) => typeof (element) === "string");
}
console.log(`[Output: '${resultStrings(shit)}']`)

/**
 * 3.-Create a function that calculates the distance between two points using the object that I provide you as Point, you must use imperative programming for this exercise. 
 * Your function must receive two parameters, point a and point b and calculate the distance.reate a function that cleans up the shit array using declarative programming (split, join or any of them).
 */

/**
 * If number1 is less than number2, return number2 minus number1, otherwise return number1 minus
 * number2.
 * @param number1 - The first number to subtract.
 * @param number2 - The number that is being subtracted from number1.
 * @returns The difference between the two numbers.
 */
function difference(number1, number2) {
    if (number1 < number2) {
        return number2 - number1;
    } else {
        return number1 - number2;
    }
}

/**
 * The distance between two points is the square root of the sum of the squares of the differences
 * between the 'x' and 'y' values of the points.
 * @param point1 - {x: 5, y: 8}
 * @param point2 - {
 * @returns The distance between the two points
 */
function distance(point1, point2) {

    let a = difference(point1.x, point2.x);
    let b = difference(point1.y, point2.y);

    return `The distance between these points is ${(a ** 2 + b ** 2)}`;
}
console.log(`[Output for Point(5, 8) & Point(7, 10): '${distance(new Point(5, 8), new Point(7, 10))}']`)

/**
 * 4.- Create a function that compares the values of exampleArray2 and exampleArray1 but is set to type
 */

/**
 * If the matrix is an array, push it to the arrays array, and then recursively call the function on
 * each element of the matrix.
 * @param matrix - The array to be decomposed.
 * @param [arrays] - This is the array that will be returned.
 * @returns An array of arrays.
 */
function decomposeArr(matrix, arrays = []) {

    if (!Array.isArray(matrix)) {
        if (!typeof arrays === "undefined") { return arrays; }
        else { return "There has been an error!"; }
    }

    matrix.forEach((rhs) => {
        if (Array.isArray(rhs)) { arrays.push(rhs); }
        return decomposeArr(rhs, arrays);
    });

    return arrays;
}

/**
 * If the array is not an array of arrays, return the array as an array of arrays
 * @param array - the array to be decomposed
 * @returns an array of arrays.
 */
function checkIfArr(array) {

    if (array.every((element) => Array.isArray(element) === false)) {
        return [array];
    } else {
        return decomposeArr(array);
    }
}

/**
 * It returns true if the two arrays have the same length and the same values in the same order, and
 * false otherwise
 * @param array1 - The first array to compare.
 * @param array2 - The array to compare to array1.
 * @returns true
 */
function equalArrays(array1, array2) {

    if (array1.length === array2.length && array1.every((value, index) => { return value === array2[index]; })) {
        return true;
    } else {
        return false;
    }
}

/**
 * It takes two arrays as arguments, checks if they are arrays, then checks if they have equal
 * elements, and returns a string with the equal elements
 * @param array1 - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @param array2 - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @returns an array of strings.
 */
function compareArrays(array1, array2) {
    let firstArray = checkIfArr(array1);
    let secondArray = checkIfArr(array2);
    let response = [];

    for (firstElement of firstArray) {
        for (secondElement of secondArray) {
            if (equalArrays(firstElement, secondElement)) {
                response.push(`The array [${firstElement}] in the first array and [${secondElement}] in the second array are EQUAL`)
            }
        }
    }

    if (response.length !== 0) {
        return response
    } else {
        return "There is no equal arrays between these two elements"
    }
}

console.log(`Output of the two proposed arrays '${compareArrays(exampleArray, exampleArray2)}'`)