'use strict';

// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”
// Тайминг: 15 минут.

// 1.
// const userName = prompt('Enter your name');
// const userAge = Number.parseInt(prompt('Enter your age'));
// console.log(`User name is ${userName} and ${userAge} old`);

// 2.

// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a);
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3);
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0);
// alert(-1 / 0);
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' + 3);
// ```

// const a = 13;
// const b = 5;
// console.log(a % b);

// 3.

// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:

// Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.

// const a = '2';
// const b = '3';
// console.log(a + b);

// const userNumber1 = +prompt('Enter first number');
// const userNumber2 = +prompt('Enter second number');
// console.log(`Сумма чисел равна: ${userNumber1 + userNumber2}`);
// console.log(`Разность чисел равна: ${userNumber1 - userNumber2}`);
// console.log(`Произведение чисел равно: ${userNumber1 * userNumber2}`);
// console.log(`Частное чисел равно: ${userNumber1 / userNumber2}`);
// console.log(`Остаток от деления чисел равен: ${userNumber1 % userNumber2}`);

// 4.

// 1. Не запуская код, определите, что выводится в консоль:

// ```
// console.log(String(true)); //'true'
// console.log('a' + true);  //'atrue'
// console.log(Number(true)); //1
// console.log(true + 1); //2
// console.log(true + true); // 2
// console.log(true - true); // 0
// console.log(String(true) + Number(true)); //'true1'
// ```

// 5.

// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

// const userNumber = +prompt('Enter your number');

// if (userNumber > 5) {
//   console.log('Число больше 5');
// } else if (userNumber < 5) {
//   console.log('Число меньше 5');
// } else {
//   console.log('Число равно 5');
// }

// userNumber > 5 ? console.log('Число больше 5') : console.log('Число меньше 5');
// console.log(userNumber > 5 ? 'Число больше 5' : 'Число меньше 5');

// userNumber > 5
//   ? console.log('Число больше 5')
//   : userNumber < 5
//   ? console.log('Число меньше 5')
//   : console.log('Число равно 5');

// userNumber > 5 && console.log('Число больше 5');
// userNumber < 5 && console.log('Число меньше 5');
// userNumber === 5 && console.log('Число равно 5');

// 2.
// const test1 = 3;
// const test2 = 4;

// console.log(test1 !== test2);
// console.log(test1 === test2);

// // 3.
// const userNumber1 = +prompt('Enter first number');
// const userNumber2 = +prompt('Enter second number');
// if (userNumber1 > userNumber2) {
//   console.log(`Минимальное значение: ${userNumber2}`);
// } else {
//   console.log(`Минимальное значение: ${userNumber1}`);
// }

// userNumber1 > userNumber2
//   ? console.log(`Минимальное значение: ${userNumber2}`)
//   : console.log(`Минимальное значение: ${userNumber1}`);

// 4.
// const userNumber = +prompt('Enter number from 0 to 15');
// if (userNumber > 0 && userNumber < 15) {
//   console.log(`Спасибо за число ${userNumber}.`);
// } else {
//   console.log(`А вы, я смотрю, хулиганите! ${userNumber} - неверное значение.`);
// }

// 5.
// 468 -
// 46  -
//asdfdf
const userNumber = Math.abs(Number.parseInt(prompt('Enter number')));
console.log(userNumber);
const result1 = userNumber % 10;
const result2 = Math.trunc(userNumber / 10) %10;
const result3 = Math.trunc(userNumber/100) % 10;
console.log(`Единицы: ${result1}.\n Десятки: ${result2}.\n Сотни: ${result3}.`);

// const result = userNumber.slice(-1);
// const result1 = userNumber.slice(-2, -1);
// const result2 = userNumber.slice(-3, -2);
// console.log(`Единицы: ${result}.\n Десятки: ${result1}.\n Сотни: ${result2}.`);
