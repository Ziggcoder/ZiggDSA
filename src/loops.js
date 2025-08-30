/**
 * Executes a loop that iterates from 1 to 5, incrementing by 1 each time.
 * @param {number} i - The loop counter variable that starts at 1, continues while less than or equal to 5, and increments by 1 each iteration.
 */
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }
//valid loop
// for (; ; ) {
//   console.log("Hello, World!");
// }

// ////////////////////////// ////////////////////////// //////////////////////////
// // Question 1 : Sum of n natural numbers 1+2+3+4+5
// // Answer :
// let n = Number("100");
// if (isNaN(n)) {
//   console.log("Invalid input");
// } else {
//   if (n <= 0) {
//     console.log("Input should be a positive integer");
//   } else {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     console.log("Sum of first " + n + " natural numbers is: " + sum);
//   }
// }
// ////////////////////////// //////////////////////////
// // Question 2 : Factorial of a number 1*2*3*4*5
// // Answer 1:
// let num = Number("5");
// if(isNaN(num)){
//      console.log("Invalid input");
// } else {
//     if (num < 0) {
//         console.log("Input should be a non-negative integer");
//     } else {
//         let factorial = 1;
//         for (let i = 1; i <= num; i++) {
//             factorial *= i;
//         }
//         console.log("Factorial of " + num + " is: " + factorial);
//     }
// }
// // Answer 2:
// let num2 = Number("5");
// console.log(
//   isNaN(num2)
//     ? "Invalid input"
//     : num2 < 0
//     ? "Input should be a non-negative integer"
//     : "Factorial of " +
//       num2 +
//       " is: " +
//       Array.from({ length: num2 }, (_, i) => i + 1).reduce((a, b) => a * b, 1)
// );
// // Answer 3:
// let num3 = Number("5");
// if(num3<1||isNaN(num3)){
//     console.log("Invalid input");
// }else{
//      let fact=1;
//      while (num3>1)fact*= num3--;
//      console.log("Factorial is: " + fact);
// }
////////////////////////// //////////////////////////
// // Question 3 : Factors of a number
// // Answer 1: Using for loop from 1 to num4
// let num4 = Number("132");
// // Pros: Simple, easy to understand, always correct
// // Cons: Inefficient for large numbers (checks all numbers up to num4)
// if(num4<1||isNaN(num4)){
//     console.log("Invalid input");
// }else{
//     console.log("Factors are: ");
//     for(let i=1;i<=num4;i++){
//         if(num4%i===0)console.log(i);
//     }
// }

// // Answer 2:
// let n5 = Number("132");
// // Pros: More efficient than checking all numbers up to n5 (only checks up to n5/2)
// //       Simple logic, easy to understand
// // Cons: Still not optimal for large numbers (could use sqrt(n5) for better efficiency)
// //       Always prints n5 at the end, which is only a factor if n5 % n5 === 0 (which is always true)
// //       Does not print factors in pairs, so may miss some optimization
// if (n5 < 1 || isNaN(n5)) {
//   console.log("Invalid input");
// } else {
//     for (let i = 1; i <= Math.floor(n5/2); i++) {
//       if (n5 % i === 0) console.log(i);
//     }
//     // n5 is always a factor of itself
//     console.log(n5);
// }

// // Answer 3: Optimal approach using for loop up to sqrt(n)
// let num6 = Number("12");
// // Pros: Efficient, only checks up to sqrt(num6), avoids redundant checks
// // Cons: Slightly more complex logic
// if(num6 < 1 || isNaN(num6)){
//     console.log("Invalid input");
// }else{
//     console.log("Optimal Factors are: ");
//     for(let i=1; i*i<=num6; i++){
//         if(num6 % i === 0){
//             console.log(i);
//             if(i !== num6/i) console.log(num6/i); // Avoid duplicate for perfect squares
//         }
//     }
// }

////////////////////////// //////////////////////////
// // Question 4 : check prime  number

// // Answer 1: Simple for loop from 2 to n-1
// // Pros: Easy to understand, correct for small numbers
// // Cons: Inefficient for large numbers (O(n))
// let n7 = Number("29");
// if (n7 < 2 || isNaN(n7)) {
//   console.log("Not prime");
// } else {
//   let isPrime = true;
//   for (let i = 2; i < n7; i++) {
//     if (n7 % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   console.log(isPrime ? "Prime" : "Not prime");
// }

// // Answer 2: Check up to n/2
// // Pros: Slightly faster than checking up to n-1
// // Cons: Still inefficient for large numbers (O(n))
// let n8 = Number("29");
// if (n8 < 2 || isNaN(n8)) {
//   console.log("Not prime");
// } else {
//   let isPrime = true;
//   for (let i = 2; i <= Math.floor(n8 / 2); i++) {
//     if (n8 % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   console.log(isPrime ? "Prime" : "Not prime");
// }

// // Answer 3: Optimal approach, check up to sqrt(n)
// // Pros: Efficient (O(sqrt(n))), standard method for primality
// // Cons: Slightly more complex logic
// let n9 = Number("29"); // n9 = 29

// if (n9 < 2 || isNaN(n9)) {
//   // false (29 >= 2 and is a number)
//   console.log("Not prime");
// } else {
//   let isPrime = true;
//   // Loop: i = 2; i * i <= 29; i++
//   // i = 2; 2*2=4 <= 29; 29%2 != 0
//   // i = 3; 3*3=9 <= 29; 29%3 != 0
//   // i = 4; 4*4=16 <= 29; 29%4 != 0
//   // i = 5; 5*5=25 <= 29; 29%5 != 0
//   // i = 6; 6*6=36 > 29; loop ends
//   for (let i = 2; i * i <= n9; i++) {
//     if (n9 % i === 0) {
//       // never true for 29
//       isPrime = false;
//       break;
//     }
//   }
//   console.log(isPrime ? "Prime" : "Not prime"); // Output: "Prime"
// }

// // Answer 4: Using Array and every()
// // Pros: Concise, functional style
// // Cons: Less readable for beginners, not optimal for very large numbers
// let n10 = Number("29");
// console.log(
//   n10 < 2 || isNaN(n10)
//     ? "Not prime"
//     : Array.from({ length: Math.floor(Math.sqrt(n10)) - 1 }, (_, i) => i + 2)
//         // Math.floor(Math.sqrt(29)) = 5, so length = 4
//         // Generates [2, 3, 4, 5]
//         .every((i) => n10 % i !== 0)
//     ? // Checks if 29 is not divisible by 2, 3, 4, 5
//       // 29 % 2 !== 0 (true)
//       // 29 % 3 !== 0 (true)
//       // 29 % 4 !== 0 (true)
//       // 29 % 5 !== 0 (true)
//       // All true, so every() returns true
//       "Prime"
//     : "Not prime"
// );

// // Answer 5: Special cases and edge handling
// // Pros: Handles edge cases (0, 1, negative numbers), efficient
// // Cons: Slightly more verbose
// function isPrime(n) {
//   if (n < 2 || isNaN(n)) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false; //elementary case for even numbers
//   for (let i = 3; i * i <= n; i += 2) {  // check only odd divisors
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(91) ?  ": Prime" : ": Not prime"); // true
// for (let i = 1; i <=1000; i++) {
//  isPrime(i) && console.log(i);
// }
// let divisors = Array.from({ length:100-1 }, (_, i) => i + 1);
// console.log(divisors);
// let primeResults = divisors.forEach((e) => {
//      isPrime(e) && console.log(e);
// });

////////////////////////// //////////////////////////
// //reverse the number
// let n=Number('12345')
// if(isNaN(n)||n===0){
//      console.log("Invalid input");
// } else {
//      let rev=0;
//      while(n>0){
//           rev=rev*10+n%10;
//           n=Math.floor(n/10);
//      }
//      console.log("Reversed number:", rev);
// }

// // sum of digit of number
// let n2 = Number("12345");
// if (isNaN(n2) || n2 === 0) {
//   console.log("Invalid input");
// } else {
//   let sum = 0;
//   while (n2 > 0) {
//     sum = sum +=(n2 % 10);
//     n2 = Math.floor(n2 / 10);
//   }
//   console.log("sum of number:", sum);
// }

// // palindrome number
// let n3 = Number("12322");
// let cp=n3;
// if (isNaN(n3) || n3 === 0) {
//   console.log("Invalid input");
// } else {
//   let rev = 0;
//   while (n3 > 0) {
//     rev = rev * 10 + (n3 % 10);
//     n3 = Math.floor(n3 / 10);
//   }
//   console.log("Palindrome number:", rev === cp ? "Yes" : "No");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // !/^\d+$/.test(n2) means:
// // /^\d+$/ is a regular expression that matches a string containing only digits (at least one digit, from start to end).
// // .test(n2) checks if n2 matches this pattern.
// // The ! in front negates the result.
// // So:
// // !/^\d+$/.test(n2) is true if n2 contains anything other than digits (i.e., not a valid non-negative integer string).
// // It is used to validate input.
// // Reverse the number (Optimal: using string methods)
// let n = "12345";
// if (!/^\d+$/.test(n) || n === "0") {
//   console.log("Invalid input");
// } else {
//   let rev = n.split("").reverse().join("");
//   console.log("Reversed number:", rev);
// }
// // Pros: Concise, avoids arithmetic loop, works for very large numbers.
// // Cons: Only works for integer strings, not for actual numbers.
// // Time: O(k), Space: O(k), k = number of digits

// // Sum of digits (Optimal: using string reduce)
// let n2 = "12345";
// if (!/^\d+$/.test(n2) || n2 === "0") {
//   console.log("Invalid input");
// } else {
//   let sum = n2.split("").reduce((acc, d) => acc + Number(d), 0);
//   console.log("Sum of digits:", sum);
// }
// // Pros: Concise, no explicit loop, works for large numbers.
// // Cons: Only works for integer strings.
// // Time: O(k), Space: O(k), k = number of digits

// // Palindrome number (Optimal: compare string to its reverse)
// let n3 = "12322";
// if (!/^\d+$/.test(n3) || n3 === "0") {
//   console.log("Invalid input");
// } else {
//   let isPalindrome = n3 === n3.split("").reverse().join("");
//   console.log("Palindrome number:", isPalindrome ? "Yes" : "No");
// }
// // Pros: Simple, avoids arithmetic, works for large numbers.
// // Cons: Only works for integer strings.
// // Time: O(k), Space: O(k), k = number of digits

// // --- Pros & Cons Summary ---
// // Pros: String methods are concise, readable, and avoid arithmetic overflow for very large numbers.
// // Cons: Only valid for string representations of integers, not for floating-point or negative numbers.
// // Time Complexity: O(k) for all, where k is the number of digits.
// // Space Complexity: O(k) for all, due to

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reverse number and reverse word
// let s="Kuldeep"; //peedluK
// let revWord = s.split("").reverse().join("");
// console.log("Reversed word:", revWord);

// let s = "Kuldeep is my name"; //name my is Kuldeep
// let revWord = s.split(" ").reverse().join(" ");
// console.log("Reversed word:", revWord);

// let s = "Kuldeep is my name";  //peedluK si ym eman
// let revWord = s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// console.log("Reversed word:", revWord);

// let s = "Kuldeep is my name"; //eman ym si peedluK
// let revWord = s.split(" ").map(word => word.split("").reverse().join("")).reverse().join(" ");
// console.log("Reversed word:", revWord);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Sum of FACTORIAL OF DIGITS digits (Optimal: using string reduce)
// let n2 = "145";
// if (!/^\d+$/.test(n2) || n2 === "0") {
//   console.log("Invalid input");
// } else {
//   let sum = n2.split("").reduce((acc, d) => {
//          let fact = 1;
//          for (let i = 1; i <= d; i++) {
//            fact *= i;
//          }
//          return fact+acc
//   } , 0);
//   console.log("Sum of digits:", sum);
// }

// //Strong number
// let n4 = "145";
// if (!/^\d+$/.test(n4) || n4 === "0") {
//   console.log("Invalid input");
// } else {
//   let cp = Number(n4);
//   let sum = n4.split("").reduce((acc, d) => {
//     let fact = 1;
//     for (let i = 1; i <= d; i++) {
//       fact *= i;
//     }
//     return fact + acc;
//   }, 0);
//   console.log("Strong Number:", sum === cp ? "Yes" : "No");
// }


