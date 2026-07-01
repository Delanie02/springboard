/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

const sightings = (...animalNames) => {
  console.log(`Animal Sights: ${animalNames}`);
};

sightings("Rhino", "Cat", "Snake", "Horse");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const protectedAreas = [...forestHabitats, ...savannahHabitats];

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const updatedRhino = { ...rhinoStatus, population: 4, habitat: "Savannah D" };

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * The genetics property gets added to the the lionProfileCopy but not to the orignal lionProfile.
 */

const lionProfileCopy = { ...lionProfile, genetics: "XX" };

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * The copy gets and updated foodSupply carnivores value, but it does not change the original value of the carnivore foodSupply in ecosystemHealth.
 */

const ecosystemHealthCopy = {
  ...ecosystemHealth,
  foodSupply: {
    ...ecosystemHealth.foodSupply,
    carnivores: "Abundant",
  },
};
