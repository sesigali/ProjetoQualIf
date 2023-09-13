const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/config');

const Company = db.define(
  'Company',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ... 
  },
  {
    // ...
  }
);

module.exports = Company;
