const Sequelize = require("sequelize");
const config = new Sequelize("robogarden_app", "user", "", {dialect: "mysql"});

module.exports = config;