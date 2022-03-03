const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/connection")

const Moive = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
})

module.exports = Moive