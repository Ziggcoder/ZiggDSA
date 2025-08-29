console.log("#########################################################");
//  a=12
// console.log(a);
// var a;

///////////////////////////////////////
// let a =10;
// let b=20;
// console.log(typeof (a+b), a+b);
///////////////////////////////////////

///////////////////////////////////////
//Type Coercion
// console.log(1+1);   //2
// console.log("1"+1); //"11"
// console.log("1"-1); //0
// console.log("1"*2); //2
// console.log("1"/2); //0.5
// console.log("3"%2); //1
///////////////////////////////////////

//Accept and Print Values

///////////////////////////////////////
//Type Casting
// let a="1";      //number 1
// let a="1e";     //number NaN
// let a="0x0011"; //number 17
// a=Number(a);
// console.log(typeof a,a);
///////////////////////////////////////

///////////////////////////////////////
//Swaping
//****************/
//Shortest way to Swaping without using extra variable by Chat GPT-5 in JS
// let a=10;
// let b=20;
// [a,b] = [b,a];
// console.log(a,b);
//****************/
//Basic way to Swaping by using extra variable c
// let a=10;
// let b=20;
// let c;
// c=a;
// a=b;
// b=c;
// console.log(a,b);
//****************/
// Maths way without using extra variable
// let a=10;
// let b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);
//****************/
// Multiplication & Division Method - Works only when a and b are non-zero numbers.
// let a = 10;
// let b = 20;
// a = a * b; // a = 200
// b = a / b; // b = 10
// a = a / b; // a = 20
// console.log(a, b); // 20 10
//****************/
//  XOR Bitwise Method - Works with integers. No extra variable needed.
// let a = 10;
// let b = 20;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b); // 20 10
//****************/
// Array .reverse() Trick - Uses an array but no explicit temp variable.
// let a = 10;
// let b = 20;
// [a, b] = [a, b].reverse();
// console.log(a, b); // 20 10
//****************/
// Using Function Return - Swap via destructuring returned array.
// function swap(x, y) {
//   return [y, x];
// }
// let a = 10, b = 20;
// [a, b] = swap(a, b);
// console.log(a, b); // 20 10
//****************/
// ES6 Map / Object Trick
// let a = 10, b = 20;
// ({a, b} = {a: b, b: a});
// console.log(a, b); // 20 10
///////////////////////////////////////

///////////////////////////////////////
// Operator And Math functions
// console.log(Math.floor(100/3)); //33
// console.log(Math.ceil(100/3)); //34
// console.log(Math.round(100/3)); //33
// console.log(101%3); //2
///////////////////////////////////////

///////////////////////////////////////
// Just Playing Aritmatic Operator '+,-,/,*,%'
// let a = 123456
// // number of digits in the integer a
// let b = (a === 0) ? 1 : Math.floor(Math.log10(Math.abs(a))) + 1; //take length of digit
// let c,d,m;
// for(let i=b;i>=0;i--){
//   m = 10 ** i;
//   c = Math.floor(a / m);
//   d = Math.floor(a % m);
// console.log(`b=${b} i=${i} c=${c} ${d}=d   m=${m}`);
// }
// b=6 i=6       c=0   123456=d   m=1000000
// b=6 i=5       c=1    23456=d   m=100000
// b=6 i=4       c=12    3456=d   m=10000
// b=6 i=3       c=123    456=d   m=1000
// b=6 i=2       c=1234    56=d   m=100
// b=6 i=1       c=12345    6=d   m=10
// b=6 i=0       c=123456   0=d   m=1
///////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// // Relational Operator '> ,< ,<= ,>= ,== ,=== ,!= ,!=='

// // Basic numeric comparisons
// console.log(5 > 3);          // true
// console.log(5 < 3);          // false
// console.log(5 >= 5);         // true
// console.log(4 <= 4);         // true
// // String comparisons (lexicographic)
// console.log("b" > "a");      // true  ('b' comes after 'a')
// console.log("2" > "10");     // true  ('2' compares to '1'; '2' > '1')
// console.log("apple" < "banana"); // true
// // Mixed type with > < (numeric coercion if one is number)
// console.log("20" > 3);       // true   ("20" -> 20)
// console.log("02" < 3);       // true   ("02" -> 2)
// // Loose vs strict equality
// console.log(5 == "5");       // true   (string coerced to number)
// console.log(5 === "5");      // false  (different types)
// console.log(0 == false);     // true   (false -> 0)
// console.log(0 === false);    // false
// console.log("" == 0);        // true   ("" -> 0)
// console.log("" === 0);       // false
// // Null and undefined
// console.log(null == undefined);  // true
// console.log(null === undefined); // false
// console.log(null == 0);          // false

// // NaN behavior
// console.log(NaN === NaN);    // false :GOTO:157 For Explanation
// //*NOTE*// NaN == NaN  //false //*NOTE*//
// // is defined by the IEEE‑754 floating‑point standard to be “not equal to any value, including itself.”
// // So, the === (and ==) operators always return false for NaN === NaN.
// // Why:
// // NaN represents an invalid/undefined numeric result (e.g. 0/0, parseFloat("abc")).
// // Equality operators rely on the spec rule: any comparison (except !=) with NaN is false.
// // This prevents accidental treatment of invalid math as a valid equal number.
// // How to correctly check for NaN:
// console.log(Number.isNaN(NaN));          // true (preferred)
// console.log(isNaN("foo"));               // true (coerces; often confusing)
// console.log(Number.isNaN("foo"));        // false (no coercion)
// console.log(Object.is(NaN, NaN));        // true (Object.is treats NaN as same token)
// console.log(Number.isNaN(NaN)); // true (proper NaN check)
// //*NOTE*// NaN == NaN  //false //*NOTE*//

// // Inequality counterparts
// console.log(5 != "5");       // false  (coerces, so equal)
// console.log(5 !== "5");      // true   (type differs)
// // Object (reference) comparison
// const a = { x: 1 };
// const b = { x: 1 };
// const c = a;
// console.log(a === b);        // false (different objects)
// console.log(a === c);        // true  (same reference)
// // Array comparison (also by reference)
// console.log([1,2] == [1,2]); // false :GOTO:185 For Explanation
// console.log([1,2].toString() === [1,2].toString()); // true (compared as strings)

// //*NOTE*///////////////////////////////////////////////////////////////*NOTE*//
// console.log([1, 2] == [1, 2]); // false  why ?
// // [1,2] creates a new Array object each time it appears. In JavaScript, both == and === compare object (including array) references, not structural contents. Since the two literals produce two distinct objects at different memory addresses, the comparison is false.
// // Example:
// // let a = [1,2];
// // let b = [1, 2];
// // let c = a;
// // console.log(a == b);   // false (different objects)
// // console.log(a === b);  // false
// // console.log(a == c);   // true (same reference)
// // To compare contents (shallow):
// function arraysEqual(x, y) {
//   return x.length === y.length && x.every((v,i) => v === y[i]);
// }
// arraysEqual([1,2], [1,2]); // true
// // Quick but limited option (fails with objects, order-insensitive needs, holes, NaN handling differences):
// JSON.stringify([1,2]) === JSON.stringify([1,2]); // true
// //*NOTE*///////////////////////////////////////////////////////////////*NOTE*//

// // Practical: sorting numbers vs strings
// const nums = [2, 10, 1];
// console.log(nums.sort());        // [1, 10, 2] (converted to strings)
// console.log(nums.sort((x,y) => x - y)); // [1,2,10] (numeric sort)

// //*NOTE*///////////////////////////////////////////////////////////////*NOTE*//
//  console.log(nums.sort());  // [1, 10, 2] WHY ?
// // By default, Array.sort() converts elements to strings and sorts them alphabetically
// // When converting to strings:
// // '1' comes before '10' because '1' is less than '1' in the first position
// // '2' comes after '10' because '2' is greater than '1' in the first position
// // This is why we get the seemingly incorrect order [1, 10, 2]
// // Numeric Sort
// console.log(nums.sort((x,y) => x - y));  // [1, 2, 10]
// // To sort numbers properly, we need to provide a comparison function
// // The function (x,y) => x - y works because:
// // If x is less than y, returns negative number (x should come first)
// // If x equals y, returns zero (order doesn't matter)
// // If x is greater than y, returns positive number (y should come first)
// // Example Breakdown
// // How (x,y) => x - y works:
// // 2 - 10 = -8   // negative, so 2 comes before 10
// // 2 - 1  = 1    // positive, so 1 comes before 2
// // 10 - 1 = 9    // positive, so 1 comes before 10
// //*NOTE*///////////////////////////////////////////////////////////////*NOTE*//
//////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////
// // Logical Operator && ||
// // AND (&&)
// // Both conditions must be true
// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false
// // OR (||)
// // At least one condition must be true
// console.log(true || true);   // true
// console.log(true || false);  // true
// console.log(false || true);  // true
// console.log(false || false); // false
// // NOT (!)
// // Inverts the boolean value
// console.log(!true);   // false
// console.log(!false);  // true
// console.log(!!true);  // true (double negation)
// // Double negation !!
// // How it works: !!true  // true
// // First ! (inner negation):  !true   // false (first negation)
// // Converts the value to boolean and inverts it
// // Second ! (outer negation): !false  // true  (second negation)
// // Inverts the result again, giving the "true" boolean equivalent
// // Converting values to boolean
// console.log(!!1);         // true
// console.log(!!0);         // false
// console.log(!!"");        // false
// console.log(!!"hello");   // true
// console.log(!!{});        // true
// console.log(!![]);        // true
// console.log(!!null);      // false
// console.log(!!undefined); // false
//// Type Consistency: Ensures a boolean return value
////Cleaner Syntax: More concise than Boolean()
//// Performance: Slightly faster than using Boolean()
// // Same result, different syntax:
// Boolean(true);    // true
// !!true;          // true

// // Nullish Coalescing (??)
// // Returns right operand when left is null/undefined
// console.log(null ?? "default");      // "default"
// console.log(undefined ?? "default"); // "default"
// console.log(0 ?? "default");        // 0
// console.log("" ?? "default");       // ""

// // Logical AND Assignment (&&=)
// // Assigns right operand if left is truthy
// // let x = true;
// // x &&= "assigned";  // x = "assigned"
// // let y = false;
// // y &&= "assigned";  // y = false

// // // Logical OR Assignment (||=)
// // // Assigns right operand if left is falsy
// // let x = false;
// // x ||= "assigned";  // x = "assigned"
// // let y = true;
// // y ||= "assigned";  // y = true

// // && stops at first falsy value
// console.log("first" && "second" && 0 && "third");  // 0
// // || stops at first truthy value
// console.log("" || 0 || "found" || "third");  // "found"
// // ?? stops at first non-null/undefined value
// console.log(null ?? undefined ?? "found" ?? "third");  // "found"
// // These are all the logical operators available in modern JavaScript. The last three (&&=, ||=, ??=) were introduced in ES2021 and may require modern browser support.
// //////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////
// // Unary Operators Demo

// // 1. Unary Plus (+)
// console.log(+"42");     // 42 (converts string to number)
// console.log(+true);     // 1
// console.log(+false);    // 0
// console.log(+null);     // 0
// console.log(+"");       // 0
// console.log(+"hello");  // NaN

// // 2. Unary Minus (-)
// console.log(-"42");     // -42
// console.log(-true);     // -1
// console.log(-false);    // -0
// console.log(-null);     // -0

// // 3. Increment (++)
// let x = 5;
// console.log(x++);       // 5 (post-increment)
// console.log(x);         // 6
// console.log(++x);       // 7 (pre-increment)
// //*NOTE*///////////////////////////////////////////////////////////////////////////////*NOTE*//
// let y=true   //1
// console.log(++y); // ++1

// // let z=10++   //SyntaxError: Invalid left-hand side expression in postfix operation
// // let w=--(x++)   //SyntaxError: Invalid left-hand side expression in postfix operation
// //These errors occur because increment/decrement operators can only be used with variables or property accesses, not with literal values or complex expressions. Let's break down both cases:
// //Key Rules:
// //Increment/decrement operators need a variable reference
// //Cannot modify literal values
// //Cannot chain increment/decrement operations
// //Must have a valid left-hand side expression (variable or property)
// //*NOTE*///////////////////////////////////////////////////////////////////////////////*NOTE*//
// // 4. Decrement (--)
// let y = 5;
// console.log(y--);       // 5 (post-decrement)
// console.log(y);         // 4
// console.log(--y);       // 3 (pre-decrement)

// // 5. Logical NOT (!)
// console.log(!true);     // false
// console.log(!false);    // true
// console.log(!!{});      // true (double NOT to check truthy/falsy)
// console.log(!![]);      // true
// console.log(!!0);       // false

// // 6. typeof operator
// console.log(typeof 42);         // "number"
// console.log(typeof "hello");    // "string"
// console.log(typeof undefined);  // "undefined"
// console.log(typeof null);       // "object" (famous JavaScript quirk)

// // 7. void operator
// console.log(void 0);           // undefined
// console.log(void(0));          // undefined
// console.log(void 2 + 3);       // undefined
// ///////////////////////////////////////

// // Unique Concepts and Edge Cases
// ///////////////////////////////////////
// // 1. Delete operator
// let obj = { x: 1, y: 2 };
// console.log(delete obj.x);      // true
// console.log(obj);              // { y: 2 }

// // 2. Unary plus with dates
// console.log(+new Date());      // timestamp in milliseconds

// // 3. Double NOT for boolean conversion
// console.log(!!"");             // false
// console.log(!!"0");            // true
// console.log(!!{});             // true
// console.log(!![]);             // true

// // 4. Increment/Decrement with strings
// let str = "5";
// console.log(++str);            // 6 (converts to number first)
// console.log(str++);            // 6
// console.log(str);              // 7

// // 5. void operator in URLs
// // <a href="javascript:void(0)">Click me</a>  // Prevents page reload

// // 6. typeof edge cases
// console.log(typeof NaN);       // "number"
// console.log(typeof (1/0));     // "number" (Infinity)
// console.log(typeof []);        // "object"
// console.log(typeof null);      // "object"
// console.log(typeof function(){}); // "function"
///////////////////////////////////////////////////////////////////////////////////////////////////\

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // Math Object Functions and Properties
// // Constants
// console.log(Math.E);          // Euler's number: 2.718281828459045
// console.log(Math.LN2);        // Natural logarithm of 2: 0.6931471805599453
// console.log(Math.LN10);       // Natural logarithm of 10: 2.302585092994046
// console.log(Math.LOG2E);      // Base 2 logarithm of E: 1.4426950408889634
// console.log(Math.LOG10E);     // Base 10 logarithm of E: 0.4342944819032518
// console.log(Math.PI);         // Pi: 3.141592653589793
// console.log(Math.SQRT1_2);    // Square root of 1/2: 0.7071067811865476
// console.log(Math.SQRT2);      // Square root of 2: 1.4142135623730951
// // Basic Operations
// console.log(Math.abs(-5));              // 5 (absolute value)
// console.log(Math.sign(-5));             // -1 (returns -1, 0, or 1)
// console.log(Math.pow(2, 3));            // 8 (2^3)
// console.log(Math.sqrt(16));             // 4 (square root)
// console.log(Math.cbrt(27));             // 3 (cubic root)
// // Rounding
// console.log(Math.round(4.6));           // 5 (nearest integer)
// console.log(Math.ceil(4.1));            // 5 (rounds up)
// console.log(Math.floor(4.9));           // 4 (rounds down)
// console.log(Math.trunc(4.9));           // 4 (removes decimal)
// console.log(Math.fround(3.5));         // Nearest 32-bit float

// // Math.floor() rounds down to the nearest integer
// console.log(Math.floor(-3.7));  // -4
// console.log(Math.floor(-3.2));  // -4

// // Math.trunc() simply removes decimal part
// console.log(Math.trunc(-3.7));  // -3
// console.log(Math.trunc(-3.2));  // -3

// // Min/Max
// console.log(Math.min(1, 2, 3));         // 1
// console.log(Math.max(1, 2, 3));         // 3
// console.log(Math.min(...[1, 2, 3]));    // 1 (with spread operator)
// // Random
// console.log(Math.random());             // Random number between 0 and 1
// console.log(Math.floor(Math.random() * 10)); // Random integer 0-9
// // Trigonometry (angles in radians)
// console.log(Math.sin(Math.PI / 2));     // 1
// console.log(Math.cos(Math.PI));         // -1
// console.log(Math.tan(Math.PI / 4));     // ~1
// // Trigonometric Methods
// console.log(Math.sin(Math.PI/2));    // Sine
// console.log(Math.cos(Math.PI));      // Cosine
// console.log(Math.tan(Math.PI/4));    // Tangent
// console.log(Math.asin(1));           // Arc sine
// console.log(Math.acos(1));           // Arc cosine
// console.log(Math.atan(1));           // Arc tangent
// console.log(Math.atan2(1, 1));       // Arc tangent of quotient
// console.log(Math.sinh(1));           // Hyperbolic sine
// console.log(Math.cosh(1));           // Hyperbolic cosine
// console.log(Math.tanh(1));           // Hyperbolic tangent
// console.log(Math.asinh(1));          // Inverse hyperbolic sine
// console.log(Math.acosh(1));          // Inverse hyperbolic cosine
// console.log(Math.atanh(0));          // Inverse hyperbolic tangent
// // Logarithmic
// console.log(Math.log(Math.E));          // 1 (natural logarithm)
// console.log(Math.log10(100));           // 2 (base 10 logarithm)
// console.log(Math.log2(8));              // 3 (base 2 logarithm)

// // Special Methods
// console.log(Math.hypot(3, 4));       // Square root of sum of squares
// console.log(Math.imul(2, 3));        // 32-bit integer multiplication
// console.log(Math.clz32(1));          // Leading zero bits in 32-bit int

// /* Common Use Cases:
// 1. Random number in range:
//    Math.floor(Math.random() * (max - min + 1)) + min
// 2. Rounding to decimal places:
//    Number((4.567).toFixed(2))  // 4.57
// 3. Check if number is integer:
//    Number.isInteger(5.5)       // false
// 4. Distance between points:
//    Math.hypot(x2-x1, y2-y1)   // sqrt((x2-x1)² + (y2-y1)²)
// 5. Degrees to radians:
//    degrees * (Math.PI / 180)
// 6. Radians to degrees:
//    radians * (180 / Math.PI)
// */

// // Generate Random 4-Digit Number
// setInterval(() => {
//      console.clear();
//      console.log(Math.trunc(Math.random() * 9000) + 1000);
// }, 100);

// setInterval(() => {
//   console.clear();
//   let i = Math.trunc(Math.random() * 900) + 100;
// //   console.log(i,"*".repeat(i));
// console.log(i, "*".repeat(i));
// }, 100);

// setInterval(() => {
//   let i = Math.trunc(Math.random() * 900) % 127;
//   const ch = i >= 0 && i <= 127 ? String.fromCharCode(i) : "?";
//   process.stdout.write(`\b${ch}`);
// }, 100);
// ///////////////////////////////////////////////////////////////////////////////////////////////////

// // ///////////////////////////////////////////////////////////////////////////////////////////////////
// // Calculate area of triangle using Heron's formula
// function getTriangleArea(a, b, c) {
//     // First check if triangle is valid
//     if (a + b <= c || b + c <= a || a + c <= b) {
//         return "Not a valid triangle";
//     }
//     // Calculate semi-perimeter
//     const s = (a + b + c) / 2;
//     // Heron's formula: Area = √(s(s-a)(s-b)(s-c))
//     // where s is semi-perimeter
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// // Test cases
// console.log("Triangle Areas:");
// console.log("Sides (3,4,5):", getTriangleArea(3, 4, 5)); // Should return 6
// console.log("Sides (5,5,5):", getTriangleArea(5, 5, 5)); // Equilateral triangle
// console.log("Sides (1,1,3):", getTriangleArea(1, 1, 3)); // Invalid triangle
// /*
// Notes:
// 1. Heron's formula is used when we know all three sides of a triangle
// 2. The semi-perimeter (s) is half the perimeter
// 3. The formula works for any triangle (scalene, isosceles, or equilateral)
// 4. We first check if the triangle is valid using triangle inequality theorem:
//    sum of any two sides must be greater than the third side
// */
// // //////////////////////////////////////////////////////////////////////////////////////////////////
