const Properties = require("./Properties.js");
const Users = require("./Users");
// const dbSeed = require("../Properties.json");

Users.create({
  name: "ADMIN",
  surname: "SUDO",
  email: "admin@propiedades.com",
  password: "1234",
  admin: true,
  adress: " 1234 55th Ave. New York, NY, EE. UU.",
  phoneNumber: "54 236 4321985",
});

Properties.bulkCreate([
  {
    name: "Aparment in Manhattan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 98.000,
    location: "manhattan",
    category: "aparment",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg",
    availability: true,
  },
  {
    name: "Aparment in Manhattan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 12.500,
    location: "manhattan",
    category: "aparment",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg",
    availability: true,
  },
  {
    name: "House in Manhattan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 8.570,
    location: "manhattan",
    category: "house",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg",
    availability: true,
  },
  {
    name: "House in New York",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 13.700,
    location: "manhattan",
    category: "house",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg",
    availability: true,
  },
  {
    name: "Aparment in Brooklyn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 98.000,
    location: "brooklyn",
    category: "aparment",
    image:
      "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2019/05/1140-budget-brooklyn-esp.jpg",
    availability: true,
  },
  {
    name: "Aparment in Brooklyn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 12.500,
    location: "brooklyn",
    category: "aparment",
    image:
      "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2019/05/1140-budget-brooklyn-esp.jpg",
    availability: true,
  },
  {
    name: "House in Brooklyn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 8.570,
    location: "brooklyn",
    category: "house",
    image:
      "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2019/05/1140-budget-brooklyn-esp.jpg",
    availability: true,
  },
  {
    name: "House in Brooklyn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 13.700,
    location: "brooklyn",
    category: "house",
    image:
      "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2019/05/1140-budget-brooklyn-esp.jpg",
    availability: true,
  },
  {
    name: "Aparment in New Jersey",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 98.000,
    location: "new Jersey",
    category: "aparment",
    image:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/476000/476870-Newport-New-Jersey.jpg",
    availability: true,
  },
  {
    name: "Aparment in New Jersey",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 12.500,
    location: "new Jersey",
    category: "aparment",
    image:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/476000/476870-Newport-New-Jersey.jpg",
    availability: true,
  },
  {
    name: "House in New Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 8.570,
    location: "new Jersey",
    category: "house",
    image:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/476000/476870-Newport-New-Jersey.jpg",
    availability: true,
  },
  {
    name: "House in New Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, leo a aliquet condimentum, metus ligula congue turpis, vel ullamcorper.",
    price: 13.700,
    location: "new Jersey",
    category: "house",
    image:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/476000/476870-Newport-New-Jersey.jpg",
    availability: true,
  },
]);
