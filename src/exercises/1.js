import React from "react";
/*
Exercise 1
Theory: First-class functions
Practice: Callback
*/

/*
Notes for me:
This is probably the last time you will and should write alert
Let's see what we did. We just passed a function to a button 
to be executed when somebody clicks on the button.
This is called a callback. The main point is that we have somebody
who will call our function instead of us.
*/

function handleClick(event) {
  // 🦄: "alert" is available globally and accepts a string
  // Write you code here 👇
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => <button onClick={handleClick}>Click me!</button>;
export default Usage;
