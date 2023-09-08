const { sequelize, DataTypes } = require("./sequelize");
const Question = require("./question");

const Option = sequelize.define('Option', {
    option: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id',
      }
    }
});
  
Option.belongsTo(Question, { foreignKey: 'question_id' });

module.exports = Option;