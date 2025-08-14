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




//////////////////////////////////////////////////////////////////////////////////
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
// console.log(!!true);  // true (double negation) :

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
//////////////////////////////////////////////////////////////////////////////////













