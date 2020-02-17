const Sequelize = require('sequelize')
const db = require('../db')

const Trades = db.define('trades', {
  stockSymbol: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numberShares: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  transaction: {
    type: Sequelize.ENUM('Buy', 'Sell'),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('pending', 'completed'),
    allowNull: false
  }
})

module.exports = Trades
