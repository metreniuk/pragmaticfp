import React from "react";
import { curry } from "ramda";
/*
  Exercise 6
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
    gender: "F",
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
 * 🦄:
 * 1. Refactor "isBoy" and "isGirl".
 * 2. [optional] Find a potential bug in the "isOlderThanTwenty" function 🤓.
 */

function processStudents(students) {
  const filteredStudents = students
    .filter(isGood)
    .filter(isOlderThanTwenty);
  const boysCount = students.filter(isBoy).length;
  const girlsCount = students.filter(isGirl).length;

  return {
    students: filteredStudents,
    boys: boysCount,
    girls: girlsCount
  };
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => <div>{}</div>;
export default Usage;
