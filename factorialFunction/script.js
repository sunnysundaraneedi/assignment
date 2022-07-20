let number = parseInt(prompt("Enter the number : "));

const findFact = (number) => {
  let fact = 1;

  for (let i = number; i > 0; i--) {
    fact = fact * i;
  }
  console.log(fact);
};

findFact(number);
