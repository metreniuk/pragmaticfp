import React from "react";
import { curry } from "ramda";
/*
  Exercise 6. 
*/

const students = [
  {
    name: "Ana 🙋‍♀️",
    grade: 10,
    gender: "F",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 1997
    },
    nationality: "🇲🇩",
    cityOfBirth: "Ungheni",
    scolarship: 700
  },
  {
    name: "Vasile 🤦‍♂️",
    grade: 4,
    gender: "M",
    dateOfBirth: {
      day: 20,
      month: 11,
      year: 1996
    },
    nationality: "🇹🇩",
    cityOfBirth: "Bucuresti",
    scolarship: 0
  },
  {
    name: "Maria 💇‍♀️",
    grade: 8,
    gender: "F",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 2000
    },
    nationality: "🇲🇩",
    cityOfBirth: "Chisinau",
    scolarship: 500
  },
  {
    name: "Ion 🤷‍♂️",
    grade: 8,
    gender: "M",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 1995
    },
    nationality: "🇲🇩",
    cityOfBirth: "Balti",
    scolarship: 500
  },
  {
    name: "Olga 🤦‍♀",
    grade: 7,
    gender: "F",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 1995
    },
    nationality: "🇲🇩",
    cityOfBirth: "Balti",
    scolarship: 400
  }
];

function isGood(student) {
  return student.grade > 6;
}

const isOlderThanTwenty = curry(function(now, student) {
  const dateOfBirth = student.dateOfBirth;
  const year = dateOfBirth.year;
  const month = dateOfBirth.month;
  const yearDiff = now.getFullYear() - year;
  const monthDiff = now.getMonth() - month;
  return yearDiff === 0 ? monthDiff >= 0 : yearDiff > 20;
});

// const isOfGender = curry(function(gender, student) {
//   return student.gender === "M";
// });

const isOfGender = curry(function(gender, student) {
  return student.gender === gender;
});

const isBoy = isOfGender("M");
const isGirl = isOfGender("F");

function processStudents(students) {
  const filteredStudents = students
    .filter(isGood)
    .filter(isOlderThanTwenty(new Date()));
  const boysCount = filteredStudents.filter(isBoy).length;
  const girlsCount = filteredStudents.filter(isGirl).length;

  return {
    students: filteredStudents,
    boys: boysCount,
    girls: girlsCount
  };
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => {
  const { students: s, boys, girls } = processStudents(students);
  return (
    <div>
      <div className="heading">Students:</div>
      <div className="student-group">
        {s.map(student => <div key={student.name}> {student.name} </div>)}
      </div>
      The dream team consists of {girls} girl(s) and {boys} boy(s)
    </div>
  );
};
export default Usage;
