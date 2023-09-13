const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/config');

const Certificate = db.define(
  'Certificate',
  {
    // ...
  },
  {
    // ...
  }
);

module.exports = Certificate;
