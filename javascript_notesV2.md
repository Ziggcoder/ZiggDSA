# JavaScript Quick Reference Notes

## 1. Variable Hoisting Example
```js
console.log("#########################################################");
// a = 12
// console.log(a);
// var a;
```

---

## 2. Type Checking and Addition
```js
let a = 10;
let b = 20;
console.log(typeof (a + b), a + b);
```

---

## 3. Type Coercion
```js
console.log(1 + 1);   // 2
console.log("1" + 1); // "11"
console.log("1" - 1); // 0
console.log("1" * 2); // 2
console.log("1" / 2); // 0.5
console.log("3" % 2); // 1
```

---

## 4. Type Casting
```js
let a = "1";      // number 1
let a = "1e";     // NaN
let a = "0x0011"; // number 17
a = Number(a);
console.log(typeof a, a);
```

---

## 5. Swapping Values

**Destructuring Assignment**
```js
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);
```

**Using Temporary Variable**
```js
let a = 10, b = 20, c;
c = a; a = b; b = c;
console.log(a, b);
```

**Addition & Subtraction**
```js
let a = 10, b = 20;
a = a + b; b = a - b; a = a - b;
console.log(a, b);
```

**Multiplication & Division**
```js
let a = 10, b = 20;
a = a * b; b = a / b; a = a / b;
console.log(a, b);
```

**XOR Bitwise**
```js
let a = 10, b = 20;
a = a ^ b; b = a ^ b; a = a ^ b;
console.log(a, b);
```

**Array Reverse**
```js
let a = 10, b = 20;
[a, b] = [a, b].reverse();
console.log(a, b);
```

**Function Return**
```js
function swap(x, y) { return [y, x]; }
let a = 10, b = 20;
[a, b] = swap(a, b);
console.log(a, b);
```

**Object Trick**
```js
let a = 10, b = 20;
({a, b} = {a: b, b: a});
console.log(a, b);
```

---

## 6. Math Functions
```js
console.log(Math.floor(100/3)); // 33
console.log(Math.ceil(100/3));  // 34
console.log(Math.round(100/3)); // 33
console.log(101 % 3);           // 2
```

---

## 7. Number of Digits
```js
let a = 123456;
let b = (a === 0) ? 1 : Math.floor(Math.log10(Math.abs(a))) + 1;
console.log(b); // 6
```

---

## 8. Relational Operators
```js
console.log(5 > 3);  // true
console.log("b" > "a"); // true
console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
```

---

## 9. Array & Object Comparison
```js
console.log([1, 2] == [1, 2]); // false
JSON.stringify([1, 2]) === JSON.stringify([1, 2]); // true
```

---

## 10. Sorting
```js
const nums = [2, 10, 1];
console.log(nums.sort()); // [1, 10, 2]
console.log(nums.sort((x, y) => x - y)); // [1, 2, 10]
```

---

## 11. Logical Operators
```js
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

console.log(null ?? "default"); // "default"
console.log("" ?? "default");   // ""

console.log("first" && "second" && 0 && "third"); // 0
console.log("" || 0 || "found" || "third"); // "found"
console.log(null ?? undefined ?? "found"); // "found"
```
