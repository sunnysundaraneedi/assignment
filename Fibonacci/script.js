let num = parseInt(prompt("Enter the number : "));

let a = 0;
let b = 1;
console.log(a);
console.log(b);

for (let i = 0; i < num - 2; i++) {
  let fbN = a + b;
  a = b;
  b = fbN;
  console.log(fbN);
}

let fbN = a + b;
