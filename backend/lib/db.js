const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://nwaynwaythanhlaing@localhost:5432/moviegallery"
);

const modelDefiners = [require("./models/customer")];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;
