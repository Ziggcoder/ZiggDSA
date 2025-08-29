// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

console.log("#########################################################");
console.log("### Welcome to the Node.js Application Initialization ###");
console.log("#########################################################");

// // Helper to promisify rl.question
// const ask = (q) => new Promise((resolve) => rl.question(q, resolve));
// // Async function to get multiple inputs without callback nesting
// const getInputs = async () => {
//      const line1 = await ask("");
//      const line2 = await ask("");
//      return { line1, line2 };
// };
// const getDuplicateInputs = async (userInputs) => {
//     console.log("Processing inputs...");
//     const { line1, line2 } = userInputs;
//     let n = parseInt(line1[0]);  // Total number of deliveries
//     let a = parseInt(line1[2]);  // Minimum difference threshold
//     let data = line2.split(" ").map(Number);  // Convert to numbers
//     let result = false;
//     // Store number with its index
//     let numIndexMap = new Map();
//     for (let i = 0; i < data.length; i++) {
//         if (numIndexMap.has(data[i])) {
//             let previousIndex = numIndexMap.get(data[i]);
//             let difference = i - previousIndex;
//             if (difference > a) {
//                 result = true;
//                 break;
//             }
//         } else {
//             numIndexMap.set(data[i], i);
//         }
//     }
//     console.log("Result:", result);
//     return result;
// };
// // Using async/await to handle the inputs
// async function main() {
//   try {
//     const userInputs = await getInputs();
//     getDuplicateInputs(userInputs);
//     rl.close();
//   } catch (error) {
//     console.error("Error:", error);
//     rl.close();
//   }
// }
// main();
// // Handle the close event
// rl.on("close", () => {
//   console.log("Input process completed!");
//   process.exit(0);
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

4