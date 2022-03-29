const Properties = require("./Properties.js");
const Users = require("./Users");
// const dbSeed = require("../Properties.json");

Users.create({
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
    name: "Aparment in Manhattan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 98.000,
    location: "Manhattan",
    category: "aparment",
    image:
      "https://galeriemagazine.com/wp-content/uploads/2019/01/Dining_3-1024x674.jpg",
    availability: true,
  },
  {
    name: "Aparment in Manhattan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 12.500,
    location: "Manhattan",
    category: "aparment",
    image:
      "https://ap.rdcpix.com/124e524c24755a316ecfbae717b03f1al-m420864645od-w480_h360_x2.jpg",
    availability: true,
  },
  {
    name: "House in Manhattan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 8.570,
    location: "Manhattan",
    category: "house",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nest-seekers-nyc-apartment-view-1547672546.jpg?crop=1.00xw:0.755xh;0,0.168xh&resize=1200:*",
    availability: true,
  },
  {
    name: "House in New York",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 13.700,
    location: "Manhattan",
    category: "house",
    image:
      "https://imgs.6sqft.com/wp-content/uploads/2021/02/08170741/23-East-22nd-Street-48th-Floor-Living-Office-1024x763.jpg",
    availability: true,
  },
  {
    name: "Aparment in Brooklyn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 98.000,
    location: "Brooklyn",
    category: "aparment",
    image:
      "https://galeriemagazine.com/wp-content/uploads/2019/01/Dining_3-1024x674.jpg",
    availability: true,
  },
  {
    name: "Aparment in Brooklyn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 12.500,
    location: "Brooklyn",
    category: "aparment",
    image:
      "https://ap.rdcpix.com/124e524c24755a316ecfbae717b03f1al-m420864645od-w480_h360_x2.jpg",
    availability: true,
  },
  {
    name: "House in Brooklyn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 8.570,
    location: "Brooklyn",
    category: "house",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nest-seekers-nyc-apartment-view-1547672546.jpg?crop=1.00xw:0.755xh;0,0.168xh&resize=1200:*",
    availability: true,
  },
  {
    name: "House in Brooklyn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 13.700,
    location: "Brooklyn",
    category: "house",
    image:
      "https://imgs.6sqft.com/wp-content/uploads/2021/02/08170741/23-East-22nd-Street-48th-Floor-Living-Office-1024x763.jpg",
    availability: true,
  },
  {
    name: "Aparment in New Jersey",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 98.000,
    location: "New Jersey",
    category: "aparment",
    image:
      "https://galeriemagazine.com/wp-content/uploads/2019/01/Dining_3-1024x674.jpg",
    availability: true,
  },
  {
    name: "Aparment in New Jersey",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 12.500,
    location: "New Jersey",
    category: "aparment",
    image:
      "https://ap.rdcpix.com/124e524c24755a316ecfbae717b03f1al-m420864645od-w480_h360_x2.jpg",
    availability: true,
  },
  {
    name: "House in New Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 8.570,
    location: "New Jersey",
    category: "house",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nest-seekers-nyc-apartment-view-1547672546.jpg?crop=1.00xw:0.755xh;0,0.168xh&resize=1200:*",
    availability: true,
  },
  {
    name: "House in New Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 13.700,
    location: "New Jersey",
    category: "house",
    image:
      "https://imgs.6sqft.com/wp-content/uploads/2021/02/08170741/23-East-22nd-Street-48th-Floor-Living-Office-1024x763.jpg",
    availability: true,
  },
]);
