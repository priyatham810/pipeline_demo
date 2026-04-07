const sum = require('./index');

if (sum(2, 3) === 5) {
  console.log("Test Passed");
} else {
  throw new Error("Test Failed");
}