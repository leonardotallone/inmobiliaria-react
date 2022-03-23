const Properties = require("./Properties");
const properties = require("./properties.json");
const User = require("./Users");

User.create({
  name: "ADMIN",
  surname: "SUDO",
  admin: true,
  email: "admin@propiedades.com",
  password: "1234",
  phoneNumber: "54 236 4321985",
  direction: " 1234 55th Ave. New York, NY, EE. UU.",
});

Propiedades.bulkCreate([
  {
    name: "Aparment in NY City",
    description: "Jim Adkins JA-90 Telecaster Thinline Crimson Red Transparent",
    price: "980",
    location: "172 Madison Ave, New York, NY 10016, EE. UU.",
    category: "aparment",
    image: "https://galeriemagazine.com/wp-content/uploads/2019/01/Dining_3-1024x674.jpg",
    availability: true,
  },
]);
