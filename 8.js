const student = {
  name: "Matt",
  age: 27,
  address: {
    state: "New York"
  },
};

// OPTIONAL CHAINING

// LONG FORM
console.log(student && student.address && student.address.ZIPCode); // Doesn't exist - Returns undefined

// SHORTHAND
console.log(student?.address?.ZIPCode); // Doesn't exist - Returns undefined