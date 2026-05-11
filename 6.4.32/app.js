const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

const locationStart = "";

if (emblemClue1 === "Eagle") {
    locationStart = "Forum";
}
else if (emblemClue1 === "Lion") {
    locationStart = "Colosseum";
}
else {
     locationStart = "Villa";   
}

if (emblemClue2 === "Laurel" && locationStart === "Forum") {
    locationStart += "of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
    locationStart += "of Pompey";
}

switch (emblemClue3) {
    case 7: locationStart += "North";
    break;
    case 3: locationStart += "South";
    break;
    case 9: locationStart += "East";
    break;
    case 4: locationStart += "West";
    break;
}

// Question: Why is it important to be careful when using == (double equals) instead of === (triple equals) in our conditionals?
// Answer: Using == (double equals) can lead to unexpected results because it performs type coercion, which means it will convert the values being compared to a common type before making the comparison. This can lead to situations where two values that are not strictly equal (in terms of type and value) are considered equal. For example, 0 == "0" would return true, while 0 === "0" would return false. Therefore, using === (triple equals) is generally recommended to ensure that both the value and the type are being compared, leading to more predictable and accurate results.