let number = Number(prompt("Enter the number : "));
let fact = 1;

for (let i = number; i > 0; i--) {
  fact = fact * i;
}
console.log(fact);
