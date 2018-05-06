const Sequelize = require('sequelize');
const db = require('../db');

const Inflow = db.define('inflow', {
    name: {
        type: Sequelize.STRING,
    },
    amt: {
        type: Sequelize.FLOAT,
   },
});

module.exports = Inflow;
