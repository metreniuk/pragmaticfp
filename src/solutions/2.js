import React from "react";
/*
  Exercise 2. Higher-order functions
*/

const students = [
  { name: "Ana 🙋‍♀️", grade: 10 },
  { name: "Vasile 🤦‍♂️", grade: 6 },
  { name: "Maria 💇‍♀️", grade: 8 },
  { name: "Ion 🤷‍♂️", grade: 8 },
  { name: "Olga 🤦‍♀", grade: 6 }
];

function isGood(student) {
  // 📖 You can access a property from student using the dot "."
  // ex: "student.name" will return the name of the student

  return student.grade > 6;
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => (
  <div>{students.filter(isGood).map(student => student.name)}</div>
);
export default Usage;
