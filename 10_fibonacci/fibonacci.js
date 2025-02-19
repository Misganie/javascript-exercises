function fibonacci(n) {
    // Convert input to a number
    const index = Number(n);
  
    // Check for negative index and NaN
    if (isNaN(index) || index < 0) {
      return "OOPS"; // Return "OOPS" for invalid input
    }
    
    if (index === 0) {
      return 0;
    }
    if (index === 1) {
      return 1;
    }
  
    let a = 0; // F(0)
    let b = 1; // F(1)
    let fib;
  
    for (let i = 2; i <= index; i++) {
      fib = a + b; // F(n) = F(n-1) + F(n-2)
      a = b; // Update F(n-2)
      b = fib; // Update F(n-1)
    }
  
    return fib;
  }
  
// Do not edit below this line
module.exports = fibonacci;
