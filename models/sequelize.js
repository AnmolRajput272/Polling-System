const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

const sequelize = new Sequelize('voting', 'superanmol1', '123', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
});

module.exports = {
    sequelize,
    DataTypes
}