import React from "react";
/*
Exercise 2
Theory: Higher-order functions
Practice: Map, Filter, Reduce
*/

/*
Notes for me:
We used a callback here. What function is a callback?
The "filter" function is called a higher-order function,
because it can accept another function as an argument.
Compare the higher-order functions with the for loop.
You can focus on what you need and skip the boilerplate.
Reduce the noise. Write only the code that matters.
I never needed to write a for loop at my work for almost 2 years.
Mention map/filter/reduce
*/

// This function should return "true" or "false" depending on the student's grade.
// If the student has a grade greater than 6 he is considered "good".
// (of course it's nonsense, the grade is not making you good or bad 👌)
function isGood(student) {
  // 🦄: you can access a property from student using the dot "."
  // ex: "student.name" will return the name of the student

  // Write you code here 👇
  return student;
}

const students = [
  { name: "Ana 🙋‍♀️", grade: 10 },
  { name: "Ion 🏃‍♂️", grade: 8 },
  { name: "Vasile 🤦‍♂️", grade: 6 },
  { name: "Maria 💇‍♀️", grade: 8 }
];

const goodStudents = students.filter(isGood);

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => <div>{goodStudents.map(student => student.name)}</div>;
export default Usage;
