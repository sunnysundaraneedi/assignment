const swapNum = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
};

swapNum(2, 3);
