const Sequelize = require('sequelize')
const db = require('../db')

const Portfolio = db.define('portfolio', {
  balance: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})

module.exports = Portfolio
