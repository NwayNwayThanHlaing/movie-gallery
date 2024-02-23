const express = require("express");
const cors = require("cors");
const sequelize = require("./lib/db");

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  console.log(`Starting Sequelize + Express example on port ${port}...`);

  // Define routes
  app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  });

  app.post("/users", async (req, res) => {
    const { firstName, lastName } = req.body;
    const newUser = await User.create({ firstName, lastName });
    res.json(newUser);
  });

  app.get("/", (req, res) => {
    res.json({ message: "Bye World" });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

init();
