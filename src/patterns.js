// // // pattern 1
// // // *
// // // **
// // // ***
// // // ****
// // // *****
// // // ******
// // // *******
// // // ********
// // // *********
// // // **********
// for(let i=1;i<=10;i++){
//    for(let j=1;j<=i;j++){
//      // console.log("*");
//      process.stdout.write("*")
//    }
//    process.stdout.write("\n");
// }

// // pattern 2
// //  **********
// //   *********
// //    ********
// //     *******
// //      ******
// //       *****
// //        ****
// //         ***
// //          **
// //           *
// for(let i=1;i<=10;i++){
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write(" ");
//   }
//    for(let j=10;j>=i;j--){
//      process.stdout.write("*")
//    }
//    process.stdout.write("\n");
// }

// // patter 3
// //           *
// //          **
// //         ***
// //        ****
// //       *****
// //      ******
// //     *******
// //    ********
// //   *********
// //  **********
// for(let i =1;i<=10;i++){
//      for (let k = 10; k >=i; k--) {
//     process.stdout.write(" ");
//      }
//     for(let j=1;j<=i;j++)
//     {
//      process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }

// // patter 4
// //           *
// //          ***
// //         *****
// //        *******
// //       *********
// //      ***********
// //     *************
// //    ***************
// //   *****************
// //  *******************

// for (let i = 1; i <= 10; i++) {
//   for (let k = 10; k >= i; k--) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   for (let l = 1; l < i; l++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }


// Pattern 1 - Optimized
for (let i = 1; i <= 10; i++) {
  process.stdout.write("*".repeat(i) + "\n");
}

for (let i = 1; i <= 10; i++) {
  process.stdout.write(" ".repeat(i) + "*".repeat(11 - i) + "\n");
}

// Pattern 3 - Optimized
for (let i = 1; i <= 10; i++) {
  process.stdout.write(" ".repeat(11 - i) + "*".repeat(i) + "\n");
}

// Pattern 4 - Optimized
for (let i = 1; i <= 10; i++) {
  process.stdout.write(" ".repeat(11 - i) + "*".repeat(2 * i - 1) + "\n");
}

// Diamond Pattern
console.log("Diamond Pattern");
for (let i = 1; i <= 10; i++) {
  process.stdout.write(" ".repeat(10 - i) + "*".repeat(2 * i - 1) + "\n");
}
for (let i = 9; i >= 1; i--) {
  process.stdout.write(" ".repeat(10 - i) + "*".repeat(2 * i - 1) + "\n");
}
console.log("Hollow Square Pattern");
// Hollow Square Pattern
for (let i = 1; i <= 10; i++) {
  let line = "";
  for (let j = 1; j <= 10; j++) {
    if (i === 1 || i === 10 || j === 1 || j === 10) {
      line += "*";
    } else {
      line += " ";
    }
  }
  process.stdout.write(line + "\n");
}
console.log("Right Pascal's Triangle");
// Right Pascal's Triangle
for (let i = 1; i <= 10; i++) {
  process.stdout.write("*".repeat(i) + "\n");
}
for (let i = 9; i >= 1; i--) {
  process.stdout.write("*".repeat(i) + "\n");
}
console.log("Butterfly Pattern");
// Butterfly Pattern
for (let i = 1; i <= 10; i++) {
  process.stdout.write("*".repeat(i) + " ".repeat(2 * (10 - i)) + "*".repeat(i) + "\n");
}
for (let i = 10; i >= 1; i--) {
  process.stdout.write("*".repeat(i) + " ".repeat(2 * (10 - i)) + "*".repeat(i) + "\n");
}