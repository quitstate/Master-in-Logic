const users = [
  {
    name: "Ronald",
    hobbies: ["IT", "Films", "Videogames"],
  },
  {
    name: "Juan",
    hobbies: ["Soccer", "Films", "Videogames"],
  },
  {
    name: "Paco",
    hobbies: ["IT", "Films", "Surf"],
  },
  {
    name: "Pepe",
    hobbies: ["IT", "Films", "Videogames", "Surf"],
  },
];

const getHobbies = (users) => {
  let map = {};

  users.forEach((user) => {
    for (const hobbies of user.hobbies) {
      if (map[hobbies]) {
        map[hobbies]++;
      } else {
        map[hobbies] = 1;
      }
    }
  });

  return map;
};

module.exports = { getHobbies, users };
