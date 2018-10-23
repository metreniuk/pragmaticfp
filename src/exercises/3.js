import React from "react";
/*
  Exercise 3. More higher-order functions. Currying
*/

const students = [
  { name: "Ana 🙋‍♀️", grade: 10 },
  { name: "Vasile 🤦‍♂️", grade: 4 },
  { name: "Maria 💇‍♀️", grade: 8 },
  { name: "Ion 🤷‍♂️", grade: 8 },
  { name: "Olga 🤦‍♀", grade: 6 }
];

function isGood(student) {
  return student.grade > 6;
}

function hasScolarship(student) {
  return student.grade > 8;
}

function isNotGoingToPay(student) {
  return student.grade > 4;
}

/**
 * 🦄: "hasGradeGreaterThan" takes the grade as an argument
 * and returns a new function that takes a student as an argument
 * and returns "true" if the student's grade is greater than
 * the "gradeToCompare"
 */
function hasGradeGreaterThan(gradeToCompare) {
  // Write you code here 👇
  return function(student) {
    return student.grade > gradeToCompare;
  };
}

// 🦄: Uncomment this code when you're done 👇
// const isGood = hasGradeGreaterThan(6);
// const hasScolarship = hasGradeGreaterThan(8);
// const isNotGoingToPay = hasGradeGreaterThan(4);

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => (
  <div>
    {" "}
    All:
    <div>{students.map(student => student.name)}</div>
    Good:
    <div>{students.filter(isGood).map(student => student.name)}</div>
    Has scolarship:
    <div>{students.filter(hasScolarship).map(student => student.name)}</div>
    Not going to pay:
    <div>{students.filter(isNotGoingToPay).map(student => student.name)}</div>
  </div>
);
export default Usage;
