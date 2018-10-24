import React, { Fragment } from "react";
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

/* 🦄: This function should return "true" or "false" depending on the student's grade.
  If the student has a grade greater than 6 he is considered "good".
  (the grade is not making you good or bad - don't stress 👌)
*/
function isGood(student) {
  // 📖 You can access a property from student using the dot "."
  // ex: "student.name" will return the name of the student

  // Write you code here 👇
  return true;
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => (
  <Fragment>
    {students
      .filter(isGood)
      .map(student => <div key={student.name}>{student.name}</div>)}
  </Fragment>
);
export default Usage;
