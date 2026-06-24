const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

// Itearte over users using the map method
const newUsers = users.map(function (user) {
  // Create a new object to hold the new properties
  let newProps = {};

  // fullName is a combination of firstName and lastName
  newProps.fullName = user.firstName + " " + user.lastName;

  // membershipStatus is Premium if the user's points are more than 100, and Standard otherwise.
  if (user.points > 100) {
    newProps.membershipStatus = "Premium";
  } else {
    newProps.membershipStatus = "Standard";
  }

  // return the new object
  return newProps;
});

// Print the new array.
console.log(newUsers);
