// JavaScript Notes

console.log("\#########################################################");

// Variable hoisting // a = 12; // console.log(a); // var a;

// Type checking // let a = 10; // let b = 20; // console.log(typeof
(a+b), a+b);

// Type Coercion examples // console.log(1+1); // 2 //
console.log("1"+1); // "11" // console.log("1"-1); // 0 //
console.log("1"\*2); // 2 // console.log("1"/2); // 0.5 //
console.log("3"%2); // 1

// Type Casting // let a = "1"; // number 1 // let a = "1e"; // number
NaN // let a = "0x0011"; // number 17 // a = Number(a); //
console.log(typeof a, a);

// Swapping values in JavaScript

// 1. Shortest way (Destructuring) // let a = 10; // let b = 20; // \[a,
b\] = \[b, a\];

// 2. Basic way using temp variable // let a = 10; // let b = 20; // let
c; // c = a; // a = b; // b = c;

// 3. Math addition/subtraction // a = a + b; // b = a - b; // a = a -
b;

// 4. Multiplication & Division // a = a \* b; // b = a / b; // a = a /
b;

// 5. XOR Bitwise // a = a \^ b; // b = a \^ b; // a = a \^ b;

// 6. Array reverse // \[a, b\] = \[a, b\].reverse();

// 7. Function return // function swap(x, y) { return \[y, x\]; } //
\[a, b\] = swap(a, b);

// 8. ES6 Object trick // ({a, b} = {a: b, b: a});

// Math functions // Math.floor(100/3); // Math.ceil(100/3); //
Math.round(100/3); // 101 % 3;

// Counting digits in a number // let b = (a === 0) ? 1 :
Math.floor(Math.log10(Math.abs(a))) + 1;

// Relational Operators and comparisons

// Numeric comparisons // 5 \> 3; // true // 5 \< 3; // false // 5 \>=
5; // true // 4 \<= 4; // true

// String comparisons // "b" \> "a"; // true // "2" \> "10"; // true //
"apple" \< "banana"; // true

// Mixed type comparisons // "20" \> 3; // true // "02" \< 3; // true

// Loose vs strict equality // 5 == "5"; // true // 5 === "5"; // false
// 0 == false; // true // 0 === false; // false // "" == 0; // true //
"" === 0; // false

// Null and undefined // null == undefined; // true // null ===
undefined; // false // null == 0; // false

// NaN comparisons // NaN === NaN; // false // Number.isNaN(NaN); //
true // isNaN("foo"); // true // Number.isNaN("foo"); // false //
Object.is(NaN, NaN); // true

// Inequality // 5 != "5"; // false // 5 !== "5"; // true

// Object references // const a = {x: 1}; // const b = {x: 1}; // const
c = a; // a === b; // false // a === c; // true

// Array references // \[1,2\] == \[1,2\]; // false //
\[1,2\].toString() === \[1,2\].toString(); // true

// Sorting // const nums = \[2, 10, 1\]; // nums.sort(); // \[1, 10, 2\]
// nums.sort((x,y) =\> x - y); // \[1, 2, 10\]

// Logical Operators

// AND && // true && true; // true // true && false; // false

// OR \|\| // true \|\| false; // true // false \|\| false; // false

// NOT ! // !true; // false

// Nullish Coalescing ?? // null ?? "default"; // "default"

// Logical AND assignment &&= // let x = true; // x &&= "assigned";

// Logical OR assignment \|\|= // let y = false; // y \|\|= "assigned";

// Operator short-circuit examples // "first" && "second" && 0 &&
"third"; // 0 // "" \|\| 0 \|\| "found" \|\| "third"; // "found" // null
?? undefined ?? "found" ?? "third"; // "found"
