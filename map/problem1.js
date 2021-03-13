/**
 * Given the following array of users, complete the function that takes an array of userIds, and returns an array of their full names (fullName)
 */
const users = [
  {
    id1: {
      fullName: "Robin Johnson",
      username: "catlady123",
      email: "catlady123@test.com",
    },
  },
  {
    id2: {
      fullName: "Manuel Javier",
      username: "karateninja786",
      email: "karateninja786@test.com",
    },
  },
  {
    id3: {
      fullName: "Scout Harris",
      username: "snacklover",
      email: "snacklover@test.com",
    },
  },
  {
    id4: {
      fullName: "Lady Mitchell",
      username: "marathonrunner135",
      email: "marathonrunner135@test.com",
    },
  },
  {
    id5: {
      fullName: "Kyle Robinson",
      username: "gogiants123",
      email: "gogiants123@test.com",
    },
  },
];

const getFullNames = () => {};

console.log(
  "expected",
  getFullNames([id2, id1, id5]),
  'to be [ "Manuel Javier", "Robin Johnson", "Kyle Robinson" ]'
);

console.log(
  "expected",
  getFullNames([id1, id3, id4]),
  'to be ["Robin Johnson", "Scout Harris", "Lady Mitchell" ]'
);
