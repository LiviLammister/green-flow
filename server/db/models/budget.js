const Sequelize = require('sequelize');
const db = require('../db');

const Budget = db.define('budget', {
    month: {
        type: Sequelize.STRING,
    },
    year: {
        type: Sequelize.STRING,
    },
    yearAndMonth: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue('year') + '-' + this.getDataValue('month');
        }
    }
});

module.exports = Budget;
