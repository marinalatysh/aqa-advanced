const number = 5;

console.log("Таблиця з for:");
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("Таблиця з while:");
let j = 1;
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++;
}
