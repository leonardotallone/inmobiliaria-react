const S = require("sequelize");
const db = require("../db");

class Properties extends S.Model {}

Properties.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    location: {
      type: S.STRING,
      allowNull: false,
    },
    category: {
      type: S.STRING,
      allowNull: false,
    },
    image: {
      type: S.STRING,
      allowNull: false,
    },
    availability: {
      type: S.BOOLEAN,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "properties" }
);
