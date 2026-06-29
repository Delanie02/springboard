const mythicalCreatures = [
  {
    name: "Dragon",
    type: "Fire",
    lastSeen: "Volcano Valley",
  },
  {
    name: "Mermaid",
    type: "Water",
    lastSeen: "Coral Caves",
  },
  {
    name: "Unicorn",
    type: "Land",
    lastSeen: "Enchanted Forest",
  },
  {
    name: "Griffin",
    type: "Air",
    lastSeen: "Highwind Mountains",
  },
  {
    name: "Kraken",
    type: "Water",
    lastSeen: "Abyssal Depths",
  },
];

// Use the find method to locate the first creature of the "Water" type and log its name to the console.

function firstWater(arr) {
  const foundCreature = mythicalCreatures.find(function (value, index, array) {
    return value.type === "Water";
  });

  if (foundCreature) {
    console.log(foundCreature.name);
  }
}

// Use the findIndex method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.

function findGriffin(arr) {
  const GriffinIndex = mythicalCreatures.findIndex(
    function (value, index, array) {
      return value.name === "Griffin";
    },
  );

  if (GriffinIndex) {
    console.log(GriffinIndex);
  }
}

// Use the find method to locate the first creature last seen in "Enchanted Forest".

function forestCreature(arr) {
  return mythicalCreatures.find(function (value, index, array) {
    return value.lastSeen === "Enchanted Forest";
  });
}
