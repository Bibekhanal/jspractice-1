// document.getElementById("data").innerHTML = "loremp";
// document.getElementById("data").textContent = "<span>Welcoome</span>";
// document.write("Hello world!");
// window.alert("Hello world");
// console.log("Data");
// window.print()

// const pi = 3.14; // fixed
// let a = 10;
// var nam = 10;
// pi = 34;

// data types
let f = 20;
console.log(typeof f);
let g = "Clouds";
console.log(typeof g);
let h = true;
console.log(typeof h);
let i = [1, 2, 3];
console.log(typeof i);
let j = { name: "John" };
console.log(typeof j);
let k = null;
console.log(typeof k);
let l = undefined;
console.log(typeof l);
let m = BigInt(123);
console.log(typeof m);
let n = Symbol(123);
console.log(typeof n);

// operator
// artihmatic operator (+,-./,%,*,**,++,--)
// assigment operator (=,+=,-=,*=,/=,%=,)
// comparison operator (==,===,!=,<=,>=,<,>,?)
// logical operator (&&,||,!)

// if else statement
// let age = 42;
// if (age <= 10) {
//   console.log("child age");
// } else if (age > 10 && age <= 40) {
//   console.log("adult age");
// } else {
//   console.log("old age");
// }

// switch statement

let operator = "%";
const num1 = 10;
const num2 = 20;

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("invalid operator");
}