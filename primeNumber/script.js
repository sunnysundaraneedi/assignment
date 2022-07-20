let num = parseInt(prompt("Enter the number"));

let isPrime = true;

if (num === 1) {
  console.log("1 is neither prime nor composite number.");
} else {
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is a not prime number`);
}
