// 1. Создайте функцию, которая принимает целое число в качестве аргумента и возвращает "Even" для четных или "Odd" для нечетных чисел.

function evenOrOdd(number) {
    if(number % 2 == 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
}

// 2. Очень просто, учитывая целое число или число с плавающей запятой, найдите его противоположность.

function opposite(number) {
    if(number > 0) {
      return -Math.abs(number);
    } else {
      return Math.abs(number);
    }
  } // или функци множения на -1


// 3. Введение
// Первое столетие охватывает период с года 1 по 100 год включительно, второе столетие - со 101 года по 200 год включительно и т.д.

// Задание
// По истечении года верните столетие, в котором оно находится.

function century(year) {
    return Math.ceil(year / 100);
}

console.log(century(243));

// 4. Напишите функцию для преобразования имени в инициалы. Это ката строго принимает два слова с одним пробелом между ними.

// Выходные данные должны состоять из двух заглавных букв с разделяющей их точкой.

// Это должно выглядеть примерно так:

// Sam Harris => S.H

// patrick feeney => P.F

function some (name) {
    const [first, last] = name.split(' ');
    return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`;

    // v2
    // const nameArray = name.split(" ");
    // return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

console.log(some('Sam Harris'));

// 5. Завершите решение так, чтобы оно перевернуло переданную в него строку.

function solution(str){
    return str.split('').reverse().join('');
}

console.log(solution('maxim'));

// 6. Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(str) {
    if (str.length <= 4) {
        return str;
      }
    
      const masked = "#".repeat(str.length - 4) + str.slice(-4);
      return masked;
}

console.log(maskify('4556364607935616'));

// 7. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1);
    
    // let arr = str.split('');

    // arr.shift();
    // arr.pop();

    // let result = arr.join('');

    // return result;
}

console.log(removeChar('maxim'));

// 8. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
  const phoneNumber = '(' + numbers.slice(0, 3).join('') + ') ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6).join('');

  return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// 9.Create a function called args_count that returns the number of arguments provided

function args_count () {
    return arguments.length;
}

// function args_count(...rest) {
//     return rest.length;
// }

// 10. In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

function isLeapYear(year) {
    if( (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0 ) {
        return true;
    } else {
        return false;
    }

    // return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

console.log(isLeapYear(2020));

// 11.  DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = function (num){
  let str = '';
  for(let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }

  return str;
};

// 12. DESCRIPTION:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

function nbYear(p0, percent, aug, p) {
    let years;

    for (years = 0; p0 < p; years++) {
        p0 += Math.floor(p0 * (percent / 100) + aug);
    }

    return years;
}

// 13. A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

// Write a function that can verify if the given integer n is a perfect number, and return True if it is, or return False if not.

// Examples
// n = 28 has the following divisors: 1, 2, 4, 7, 14, 28

// 1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number, so you should return True

// Another example:

// n = 25 has the following divisors: 1, 5, 25

// 1 + 5 = 6 therefore 25 is not a perfect number, so you should return False

function isPerfect(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }
    if (arr.reduce((a, b) => a + b, 0) === n) {
        return true;
    } else {
        return false;
    }
}

console.log(isPerfect(496));