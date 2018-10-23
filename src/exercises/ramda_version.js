import {
  compose,
  prop,
  props,
  gte,
  ifElse,
  equals,
  head,
  concat,
  nth,
  toUpper,
  add,
  filter
} from "ramda";

export const handleStudents = students => {
  const isGood = compose(
    gte,
    prop("grade")
  );
  const isOlderThanTwenty = timestamp => ({ dateOfBirth: { year, month } }) => {
    const now = new Date(timestamp);
    const yearDiff = now.getFullYear() - year;
    const monthDiff = now.getMonth() - month;
    return yearDiff === 0 ? monthDiff >= 0 : yearDiff > 20;
  };

  const location = compose(
    toUpper,
    ifElse(
      compose(
        equals("🇲🇩"),
        nth(1)
      ),
      compose(
        concat("Republica Moldova, "),
        head
      ),
      compose(
        concat("Romania, "),
        head
      )
    ),
    props(["cityOfBirth", "nationality"])
  );
  const scolarship = compose(
    add(100),
    prop("scolarship")
  );
  const name = prop("name");

  const filteredStudents = compose(
    filter(isOlderThanTwenty(Date.now())),
    filter(isGood)
  )(students);

  const newStudents = filteredStudents.map(student => {
    return {
      name: name(student),
      scolarship: scolarship(student),
      location: location(student)
    };
  });

  const makeGenderFilter = gender =>
    compose(
      equals(gender),
      prop("gender")
    );
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
