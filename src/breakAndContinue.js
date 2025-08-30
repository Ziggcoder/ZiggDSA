// break and continue are control statements used in JavaScript loops (for, while, do...while) to alter the flow of execution:

// break
// Purpose: Immediately exits the loop (or switch statement).
// Usage: When a certain condition is met and you want to stop looping.
// Example:
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // exits loop when i is 3
  console.log(i);     // prints 1, 2
}


// continue
// Purpose: Skips the current iteration and moves to the next loop cycle.
// Usage: When you want to skip processing for certain values.
// Example:
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips when i is 3
  console.log(i);        // prints 1, 2, 4, 5
}
// Summary:
// break stops the loop entirely.
// continue skips the rest of the current iteration and continues looping.