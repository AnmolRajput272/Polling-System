const { sequelize, DataTypes } = require("./sequelize");

const Question = sequelize.define('Question', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

module.exports = Question;