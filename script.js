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