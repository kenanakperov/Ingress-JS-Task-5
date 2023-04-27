// ! SUM SALARY ===============================================================

let person = [
    { name: "Farid", salary: 150 },
    { name: "Togrul", salary: 950 },
    { name: "Murad", salary: 560 }, 
    { name: "Kenan", salary: 999 }, 
];

const sum = person.reduce((prev, next) => {
    return prev + next.salary;
}, 0);
console.log(sum);

  
// ! CHANGE TO ARROW FUNCTION ===============================================================

// const numbers = [45, 4, 9, 16, 25];
      
// let result = numbers.filter(item=>{
//     return item > 18
// })

// console.log(result)

// !===============================================================

// const numbers = [45, 4, 9, 16, 25];

// let result = numbers.every(item=>{
//     return item > 18
// })
// console.log(result)

// !===============================================================


// const numbers = [45, 4, 9, 16, 25];

// let result = numbers.some(item=>{
//     return item > 18
// })
// console.log(result)

// !===============================================================

// const numbers = [4, 9, 16, 25, 25, 29];
// let first = numbers.findIndex(item=>{
//     return item > 18
// })

// console.log(first);


// !===============================================================


// const numbers = [4, 9, 16, 25, 25, 29];
// let first = numbers.find(item=>{
//     return item > 18
// })

// console.log(first);


// !===============================================================

// ? FAIL ;(

// const fruits = ["Alma", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf(item=>{
//     return item = "Orange"
// });

// console.log(position);