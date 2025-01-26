function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: Both arguments are numbers

//Alternative: Type Assertion
let result2 = add(1, <number>"2");
// Type assertion can be dangerous if the value isn't actually a number.

//Alternative: Type Guard
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function addSafe(a: number, b: any): number {
  if (isNumber(b)) {
    return a + b; 
  } else {
    return a;
  }
}
let result3 = addSafe(1, "2"); // returns 1, handles non-number gracefully