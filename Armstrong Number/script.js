let num = prompt("Enterthe number : ");
let digits = num.length;
let armN = parseInt(num);

let sum = 0;

for (let i = 0; i < digits; i++) {
  let temp = armN % 10;
  sum += temp ** digits;
  armN = Math.floor(armN / 10);
}

if (sum == num) {
  console.log(`${num} is an Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number.`);
}
