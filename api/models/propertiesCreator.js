const Properties = require("./Properties.js");
const properties = require("../properties.json");
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

Properties.bulkCreate([
  {
    name: "Aparment in NY City",
    description: "Trump Build",
    price: 98.0,
    location: "172 Madison Ave, New York, NY 10016, EE. UU.",
    category: "aparment",
    image:
      "https://galeriemagazine.com/wp-content/uploads/2019/01/Dining_3-1024x674.jpg",
    availability: true,
  },
  {
    name: "Aparment in Manhattan",
    description: "Murray Build",
    price: 12.5,
    location: "111 Murray St Unit 51WEST, New York, NY 10007",
    category: "aparment",
    image:
      "https://ap.rdcpix.com/124e524c24755a316ecfbae717b03f1al-m420864645od-w480_h360_x2.jpg",
    availability: true,
  },
  {
    name: "Aparment in New York",
    description:
      "The Queen´s Aparment, could be yours for a few dollars a month.",
    price: 8.57,
    location: "50 W 20th St, New York, NY 10011, Estados Unidos",
    category: "aparment",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nest-seekers-nyc-apartment-view-1547672546.jpg?crop=1.00xw:0.755xh;0,0.168xh&resize=1200:*",
    availability: true,
  },
  {
    name: "Aparment in New York",
    description:
      "The Queen´s Aparment, could be yours for a few dollars a month.",
    price: 13.7,
    location: "One Madison, 23 East 22nd Street, NY, EE. UU.",
    category: "aparment",
    image:
      "https://imgs.6sqft.com/wp-content/uploads/2021/02/08170741/23-East-22nd-Street-48th-Floor-Living-Office-1024x763.jpg",
    availability: true,
  },
]);
