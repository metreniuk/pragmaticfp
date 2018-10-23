import React from "react";
import styled from "styled-components";
import * as R from "ramda";

// Sport Compitition / Olympiad on programming

const students = [
  {
    name: "Ana 🙋‍♀️",
    gender: "F",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 1997
    },
    nationality: "🇲🇩",
    cityOfBirth: "Ungheni",
    grade: 10,
    scolarship: 700
  },
  {
    name: "Ion 🏃‍♂️",
    grade: 7,
    gender: "M",
    dateOfBirth: {
      day: 20,
      month: 11,
      year: 1996
    },
    nationality: "🇹🇩",
    cityOfBirth: "Bucuresti",
    scolarship: 500
  },
  {
    name: "Vasile 🤦‍♂️",
    grade: 6,
    gender: "M",
    dateOfBirth: {
      day: 20,
      month: 11,
      year: 1996
    },
    nationality: "🇲🇩",
    cityOfBirth: "Chisinau",
    scolarship: 0
  },
  {
    name: "Maria 💇‍♀️",
    grade: 8,
    gender: "M",
    dateOfBirth: {
      day: 20,
      month: 11,
      year: 1996
    },
    nationality: "🇲🇩",
    cityOfBirth: "Chisinau",
    scolarship: 600
  }
];

// older then 20, purity

/*
  Criteria:
  - good student
  - from moldova
  - older than 20
  - girl
  - hobby
*/
// some filters
// good students (> 6)
// older than 20 (year > 20 and month > currentMonth)
// like sports (includes in ['football', 'tennis'])

// some mappings
// for representation on a map
// add the country to the begining based on nationality
// add the name to the location

// some reducing
// count the number of girls and boys
// count the total scolarship (the scolarship begins from 7)

// change requalsuirements
// - the good student is now starts from 8
// - the format of date changes
// - if the student goes to this contest
//    his scolarship rises with 100 lei (don't change the old value)

// ask about how did you test that the code worked?
// new Date() - get current date
// .getFullYear() - get the year from a date
// .getMonth() - get the month from a date

const processStudents = students => {
  const newStudents = [];
  let boysCount = 0;
  let girlsCount = 0;
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const dateOfBirth = student.dateOfBirth;
    const year = dateOfBirth.year;
    const month = dateOfBirth.month;
    const now = new Date();
    const yearDiff = now.getFullYear() - year;
    const monthDiff = now.getMonth() - month;
    const isOlderThanTwenty = yearDiff === 20 ? monthDiff >= 0 : yearDiff > 20;
    const isGood = student.grade >= 7;

    if (isGood && isOlderThanTwenty) {
      const cityOfBirth = student.cityOfBirth;
      const nationality = student.nationality;
      const countryPrefix =
        nationality === "🇲🇩" ? "Republica Moldova, " : "Romania, ";
      const location = countryPrefix + cityOfBirth;
      const scolarship = student.scolarship + 100;

      newStudents.push({
        name: student.name,
        scolarship: scolarship,
        location: location.toUpperCase()
      });

      if (student.gender === "M") {
        boysCount++;
      } else {
        girlsCount++;
      }
    }
  }
  return {
    students: newStudents,
    boys: boysCount,
    girls: girlsCount
  };
};

const processStudents2 = students => {
  const isGood = student => student.grade >= 7;
  const isOlderThanTwenty = timestamp => student => {
    // extracting this should be pure vs for not thinking of pure
    const dateOfBirth = student.dateOfBirth;
    const year = dateOfBirth.year;
    const month = dateOfBirth.month;
    const now = new Date(timestamp);
    const yearDiff = now.getFullYear() - year;
    const monthDiff = now.getMonth() - month;
    return yearDiff === 0 ? monthDiff >= 0 : yearDiff > 20;
  };

  const location = student => {
    const cityOfBirth = student.cityOfBirth;
    const nationality = student.nationality;
    const countryPrefix =
      nationality === "🇲🇩" ? "Republica Moldova, " : "Romania, ";
    const location = countryPrefix + cityOfBirth;
    return location.toUpperCase();
  };
  const scolarship = student => student.scolarship + 100;
  const name = student => student.name;

  const filteredStudents = students
    .filter(isGood)
    .filter(isOlderThanTwenty(Date.now()));

  const newStudents = filteredStudents.map(student => {
    return {
      name: name(student),
      scolarship: scolarship(student),
      location: location(student)
    };
  });

  const makeGenderFilter = gender => student => student.gender === gender;
  const isBoy = makeGenderFilter("M");
  const isGirl = makeGenderFilter("F");

  const boysCount = filteredStudents.filter(isBoy).length;
  const girlsCount = filteredStudents.filter(isGirl).length;

  return {
    students: newStudents,
    boys: boysCount,
    girls: girlsCount
  };
};

// In case we are late
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

function getLocation(student) {
  const cityOfBirth = student.cityOfBirth;
  const nationality = student.nationality;
  const countryPrefix =
    nationality === "🇲🇩" ? "Republica Moldova, " : "Romania, ";
  const location = countryPrefix + cityOfBirth;
  return location.toUpperCase();
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  display: flex;
  // flex-direction: column;
  // max-height: 100px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  flex: 1;
`;

const Label = styled.label`
  font-size: 16px;
`;
const Checkbox = styled.input``;

class State extends React.Component {
  state = this.props.initialState || {};

  render() {
    return this.props.children({
      state: this.state,
      setState: this.setState.bind(this)
    });
  }
}

const Usage = () => (
  <Wrapper>{processStudents(students).students.map(x => x.name)}</Wrapper>
);
export default Usage;
