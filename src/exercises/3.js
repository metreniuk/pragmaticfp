import React from "react";
/*
Exercise 3
Theory: Currying
Practice: Arrow functions
*/
let secondGreeting = "";
/*
Notes for me:
Before
- Show the add function example
- convert to arrow function
After
- From Generalisation to specialization
- the code reads naturally

Example of usage:
- making an ajax request
function request(url) {
  return data => {
    // Making a request to the url using data
  };
}

const loadUser = request("http://myserver/users");

loadUser({ id: "123321" });
*/

function _greet(greeting, name) {
  return greeting + ", " + name + "!";
}

const firstGreeting = _greet("Hi", "Alex");

// Write you code here 👇
// const greet =

// 🦄: Your code should make this code work,
// uncomment it whenever you are ready. 👇

// const sayHelloTo = greet("Hello");
// secondGreeting = sayHelloTo("👨‍💻/👩‍💻");

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => (
  <div>
    {" "}
    <div>{firstGreeting}</div>
    <div>{secondGreeting}</div>
  </div>
);
export default Usage;
