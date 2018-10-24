import React from "react";
/*
  Exercise 4. 
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

function isOlderThanTwenty(student) {
  const dateOfBirth = student.dateOfBirth;
  const year = dateOfBirth.year;
  const month = dateOfBirth.month;
  const now = new Date();
  const yearDiff = now.getFullYear() - year;
  const monthDiff = now.getMonth() - month;
  return yearDiff === 0 ? monthDiff >= 0 : yearDiff > 20;
}

function isBoy(student) {
  return student.gender === "M";
}

function isGirl(student) {
  return student.gender === "M";
}

/**
 * 🦄: "processStudents" should perform following tasks:
 * 1. Should return the students that have the grade greater than 7.
 * 📖 You can use the "isGood" function
 * 2. Should return the students that are older than 20.
 * 📖 You can use the "isOlderThanTwenty" function
 * 3. Should count the boys.
 * 📖 You can use the "isBoy" function
 * 4. Should count the girls.
 * 📖 You can use the "isGirl" function
 */

function processStudents(students) {
  const filteredStudents = [];
  let boysCount = 0;
  let girlsCount = 0;

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    // Write you code here 👇
  }

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
