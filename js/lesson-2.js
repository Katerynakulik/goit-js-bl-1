// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// let i = styles.indexOf('blues');
// styles[i] = 'classic';

// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         let n=i+1;
//         console.log(n, array[i]);
//     }
//     return;
// };

// logItems(styles)




// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     const login = prompt("введіть логін");
//     for (let i = 0; i<array.length; i++){
//         if (login==array[i]){
//             alert(`Welcome ${login}`);
//             return;
//         }
//     };
//     alert(`User not found`);
//     return;
    
// };

// checkLogin(logins);



// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args){
//     let average = 0;
//     for (const num of args){
//         if (typeof num === "number"){
//             average +=num;
//         }
//     };
//     return average;
        
// };

// console.log(caclculateAverage(10,15,6,8));
// console.log(caclculateAverage(110,315,56,78));




// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// function newArray(array){
//     const generateArray = [];
//     for (let i = 0; i<(array.length-1); i++){
//         generateArray.push(array[i]+array[i+1]);
//     }
//     return generateArray;
// };

// console.log(newArray(someArr));




// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

