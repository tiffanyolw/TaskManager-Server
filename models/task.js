const Sequelize = require("sequelize");
const config = require("./../configurations/config");

const Task = config.define("Task", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true  
    },
    title: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    priority_level: {
        type: Sequelize.ENUM,
        values: ["high", "medium", "low"],
        defaultValue: "low",
        allowNull: false
    },
    progress_level: {
        type: Sequelize.ENUM,
        values: ["pending", "started", "completed"],
        defaultValue: "pending",
        allowNull: false
    },
    task_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Task;