const funcA = (a, b) => a + b;
const funcB = () => 1 + 1;
const funcC = a => a + 1;
const whoAmI = () => console.log(this);
const whoAmI2 = function() {
    console.log(this);
}

console.log(funcA(1, 2));
console.log(funcB());
console.log(funcC(1));
console.log(whoAmI());
() => whoAmI2();
console.log(this);