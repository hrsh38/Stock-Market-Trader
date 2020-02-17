const Sequelize = require('sequelize')
const db = require('../db')

const Holdings = db.define('holdings', {
  stockSymbol: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numberShares: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  askPrice: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('pending', 'completed'),
    allowNull: false
  }
})

module.exports = Holdings
