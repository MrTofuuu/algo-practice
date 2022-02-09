'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let negOne = arr.filter(number => number < 0).length / arr.length;
    let zeroNum = arr.filter(number => number == 0).length / arr.length; 
    let posOne = arr.filter(number => number > 0).length / arr.length;
    return console.log(posOne.toFixed(6) + '\n' + negOne.toFixed(6) + '\n' + zeroNum.toFixed(6))

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
