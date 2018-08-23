
//Object destructuring

// const person = {
//   name: "Rubert",
//   age: 45,
//   location: {
//     city: "Sliedrecht",
//     temp: 23
//   }
// };

// const { name = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age} years old`);

// console.log(`it's ${temperature} degrees in ${city}`);

// Array destructuring

const address = ['Hopper 10', 'Sliedrecht', 'Zuid-Holland', '3362 JP'];

const [ , city, state = 'Noord-Holland' ] = address

console.log(`You are in ${city} in ${state}`);