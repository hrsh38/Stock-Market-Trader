import React from 'react'
import {connect} from 'react-redux'

class StockSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      stockSymbol: '',
      stockPrice: '',
      error: false
    }
    this.getStock = this.getStock.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      error: false
    })
    this.getStock(evt.target.stockName.value)
  }
  async getStock(symbol) {
    let res, data
    try {
      res = await fetch(
        `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_0d28d9163c4f493abb30011eba52046f`
      )
      data = await res.json()
      this.setState({
        stockSymbol: data.symbol,
        stockPrice: data.latestPrice
      })
    } catch (error) {
      this.setState({
        error: true
      })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <small>StockName</small>
          </label>
          <input name="stockName" type="text" />
          <button type="submit">Search</button>
        </form>
        <div />

        <div>Stock: {this.state.stockSymbol}</div>
        <div>Price: {this.state.stockPrice}</div>
        <div>{this.state.error ? 'Invalid Stock Name' : <div />}</div>
      </div>
    )
  }
}

export default StockSearch
