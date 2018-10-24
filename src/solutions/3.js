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

// function isGood(student) {
//   return student.grade > 6;
// }

// function hasScolarship(student) {
//   return student.grade > 8;
// }

// function isNotGoingToPay(student) {
//   return student.grade > 4;
// }

/**
 * 🦄: "hasGradeGreaterThan" takes the grade as an argument
 * and returns a new function that takes a student as an argument
 * and returns "true" if the student's grade is greater than
 * the "gradeToCompare"
 */
function hasGradeGreaterThan(gradeToCompare) {
  return function(student) {
    return student.grade > gradeToCompare;
  };
}

/**
 * 🦄: Uncomment this code when you're done 👇.
 * 📖 Don't forget to comment the "isGood", "hasScolarship" and  "isNotGoingToPay" from the top.
 */
const isGood = hasGradeGreaterThan(6);
const hasScolarship = hasGradeGreaterThan(8);
const isNotGoingToPay = hasGradeGreaterThan(4);

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => (
  <div>
    {" "}
    <div className="heading">All:</div>
    <div className="student-group">
      {students.map(student => (
        <div className={student.name}> {student.name} </div>
      ))}
    </div>
    <div className="heading">Good:</div>
    <div className="student-group">
      {students
        .filter(isGood)
        .map(student => (
          <div className={student.name}> {student.name} </div>
        ))}
    </div>
    <div className="heading">Has scolarship:</div>
    <div className="student-group">
      {students
        .filter(hasScolarship)
        .map(student => (
          <div className={student.name}> {student.name} </div>
        ))}
    </div>
    <div className="heading">Not going to pay:</div>
    <div className="student-group">
      {students
        .filter(isNotGoingToPay)
        .map(student => (
          <div className={student.name}> {student.name} </div>
        ))}
    </div>
  </div>
);
export default Usage;
