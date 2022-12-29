// rest operator
const myFunc = (...args) => {
    console.log(args);
}

myFunc(1,2,3);

// spread operator
const a = [1, 2];
const b = [3, [4, 5]];
const c = [2, 3, 4, 5];

console.log(...a, ...b);
console.log(...c, 7, 8);


// destructuring
const person = {
    name: "Bogdan",
    age: 20,
    birthPlace: "earth"
}

const func = ({ name, age }) => {
    console.log(name, age);
}
func(person);

const colors = ["red", "blue", "yellow", "green"];
let [red, blue, _, green] = colors; 
console.log(red, blue, green);

// optional chaining
const animals = {
    cat: "cat",
    meow: () => console.log("meow")
}

console.log(animals?.dog);
console.log(animals?.dog?.woff());

// nullish coalescing
let something = null ?? "test";
console.log(something);
something = "hello" ?? "world";
console.log(something);
something = null ?? null;
console.log(something);