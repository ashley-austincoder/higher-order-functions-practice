/**
 * Complete the function matchRidersToHorses. which given an array of riders and an array of horses, return an object that matches rider by name to horses by name. Each rider has an experience rating, and each horse has a difficulty rating.
 * The rider can be matched with any horse, but the experience and difficult ratings must be equal. In addition, more than one rider cannot be matched with the same horse.
 * There will always be at enough horses of the appropriate difficulty for each rider, and there will not be two horses or riders with the same name.
 *
 * use forEach in your solution.
 *
 * ex:
 *  riders: [
 *    {
 *      name: "Ashley",
 *      experience: 3
 *    },
 *    {
 *      name: "Josh",
 *      experience: 2
 *    },
 *    {
 *      name: "Sarah",
 *      experience: 1
 *    }
 *  ];
 *
 *  horses: [
 *    {
 *      name: "Barney",
 *      difficulty: 1
 *    },
 *    {
 *      name: "Solar",
 *      experience: 3
 *    },
 *    {
 *      name: "Max",
 *      experience: 2
 *    }
 *  ];
 *
 * result: {
 *  Ashley: "Solar",
 *  Josh: "Max",
 *  Sarah: "Barney",
 * }
 */

const matchRidersToHorses = (riders, horses) => {};

// these tests will ensure that no horse is used more than once, that all riders have been matched, and that difficulty and experience match
const result = matchRidersToHorses(
  [
    { name: "Sally", experience: 5 },
    { name: "Jeremy", experience: 3 },
    { name: "Chelsea", experience: 3 },
    { name: "Annie", experience: 2 },
    { name: "Scott", experience: 1 },
  ],
  [
    { name: "Sid", difficulty: 1 },
    { name: "Donald", difficulty: 2 },
    { name: "Salty", difficulty: 5 },
    { name: "Dusty", difficulty: 1 },
    { name: "Rose", difficulty: 2 },
    { name: "Karma", difficulty: 2 },
    { name: "Zach", difficulty: 3 },
    { name: "Thunder", difficulty: 3 },
    { name: "Jack", difficulty: 3 },
    { name: "Beauty", difficulty: 4 },
  ]
);
console.log("expect", Object.keys(result));
