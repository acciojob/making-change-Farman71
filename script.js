const makeChange = (c) => {
  // Coin values
  let q = 25, d = 10, n = 5, p = 1;
  let change = { q: 0, d: 0, n: 0, p: 0 }; // Result object

  // Calculate quarters
  change.q = Math.floor(c / q); 
  c = c - q * change.q; 

  // Calculate dimes
  change.d = Math.floor(c / d); 
  c = c - d * change.d; 

  // Calculate nickels
  change.n = Math.floor(c / n); 
  c = c - n * change.n; 

  // Calculate pennies
  change.p = Math.floor(c / p); 

  return change; // Return the result object
};

// Do not change the code below
const c = parseInt(prompt("Enter c: "), 10); // Get input as an integer
alert(JSON.stringify(makeChange(c))); // Display the result as a JSON string
