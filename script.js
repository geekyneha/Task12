// Find the sum of first n numbers where n is a variable.
let num = 10;
let sum = 0;

for (let i = 0; i <= num; i++) {
  sum = sum + i;
}
console.log(` The sum of first ${num} numbers : ${sum}`);
//------------------------------------------------------------------------

//Print table of n where n is a variable.
let number = 19;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
//------------------------------------------------------------------------

//Check if it is a prime number.
let checkPrime = 4;
let isPrime = true;
if (checkPrime <= 1) {
  console.log(`${checkPrime} is a Prime ? No`);
} else {
  for (let i = 2; i < checkPrime; i++) {
    if (checkPrime % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime === false) {
    console.log(`${checkPrime} is a Prime ? No`);
  } else {
    console.log(`${checkPrime} is a Prime ? Yes`);
  }
}

//------------------------------------------------------------------------

// Print all its factors.

let printFact = 45;
let arr = [];

for (let i = 1; i <= 45; i++) {
  if (45 % i === 0) {
    arr.push(i);
  }
}

console.log(`Factors of ${printFact}: ${arr}`);
//------------------------------------------------------------------------

// Find sum of all digits of a number (139 = 13 => 1+3+9 =13).
let given = 139;

let len = given.toString().length;
let digits = [];

for (let i = 0; i < len; i++) {
  digits.push(Math.floor((given / 10 ** (len - i - 1)) % 10));
}
let sumOfDigits = 0;
for (let i = 0; i < len; i++) {
  sumOfDigits += digits[i];
}

console.log(`Sum of ${given} digits : ${sumOfDigits}`);

//------------------------------------------------------------------------

// Check if it is an Armstrong number.

let n = 153;

if (n < 10) {
  console.log(`${n} Is it an Armstrong number?  Yes`);
  return;
}
let leng = given.toString().length;
let allNum = [];

for (let i = 0; i < leng; i++) {
  allNum.push(Math.floor((n / 10 ** (leng - i - 1)) % 10));
}
let sumOfcubes = 0;

for (let i = 0; i < leng; i++) {
  sumOfcubes += Math.pow(allNum[i], 3);
}

if (n === sumOfcubes) {
  console.log(`${n} Is it an Armstrong number?  Yes`);
} else {
  console.log(`${n} Is it an Armstrong number?  No`);
}

//------------------------------------------------------------------------
