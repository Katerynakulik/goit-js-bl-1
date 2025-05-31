// function Determine() {
//     const min = Math.floor(Math.random() * (59 - 0) + 0);
//     if (min > 45) {
//         alert (`${min} входить в четверту чверть`);
//     } else if (min > 30) {
//         alert (`${min} входить в третю чверть`);
//     } else if (min > 15) {
//         alert (`${min} входить в другу чверть`);
//     } else {
//         alert (`${min} входить в першу чверть`);
//     }

// };
// Determine();

// function input() {
//     const num = prompt('Введіть число від 1 до 4');
//     let result;
//     switch (Number(num)) {
//         case 1:
//             result = "зима";
//             break;
//         case 2:
//             result = "весна";
//             break;
//         case 3:
//             result = "літо";
//             break;
//         case 4:
//             result = "осінь";
//             break;
//         default:
//             result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно'
//             break;
//     }
//     return result;
// };

// console.log(input());



// function determineTime() {
//   const zeit = Number(prompt("Введіть кількість хвилин"));
//   let hour = Math.floor(zeit / 60);
//   let minute = zeit % 60;
//   const formattedHour = String(hour).padStart(2, "0");
//   const formattedMin = String(minute).padStart(2, "0");
//   alert(`${formattedHour}:${formattedMin}`);
// }
// determineTime();


// function identification() {
//     const login = prompt('Введіть логін');
//     if (login =='Адмін') {
//         const password = prompt('Введіть пароль');
//         if (password==null || password==''){
//             alert('Скасовано');
//         } else if (password == 'Я головний'){
//             alert('Добрий день!');
//         } else {
//             alert('Невірний пароль!');
//         }
        
//     } else {
//         alert('Я Вас не знаю');
//     }
//         return;
// };

// console.log(identification());

// function counting(){
//     let count = 0;
//     while (count<=20){
//         console.log(count);
//         count+=1;
//     }
// return;
// };
// counting();

// function getNumbers(min, max) {
//     let newcount = 0;
//     for (let i=max; i>=min; i--){
//         console.log(i);
//         if (i % 2 === 0){
//             newcount += i;
//         }
//     }
//     return newcount;
    
// };

// console.log(getNumbers(3,15));





// function min(a, b) {
//     if (a === Number(a) && b === Number(b)){
//         if (a > b) {
//             return b;
//         } else {
//             return a;
//         }
//     } else {
//         return 'Not a number!';
//     }
// };

// console.log(min(15,27));
// console.log(min(215,27));
// console.log(min(15,'27'));


function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products){
    if (productName === product.name){
      return product.price * product.quantity;
    }
  }
  return `Product "${productName}" not found!`;
}

console.log(calculateTotalPrice("Blaster"));

