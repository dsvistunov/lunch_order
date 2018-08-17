import React, { Component } from 'react';
import connect from 'redux-connect-decorator'
import * as Constants from './constants'

@connect((state) => ({
  products: state.products.data,
  orders: state.orders
}))

export default class App extends Component {
  get totalCount() {
    const {
      orders
    } = this.props

    let totalCount = 0

    // should be reduce
    Object.keys(orders).forEach((productId) => {
      const order = orders[productId]
      const price = order.product.price * order.count
      totalCount += price      
    })

    return totalCount
  }

  addProductToOrder = (product = {}) => {
    this.props.dispatch({
      type: Constants.ORDERS_ADD_ORDER,
      product
    })
  }

  addProductCount = (product = {}) => {
    this.props.dispatch({
      type: Constants.ORDERS_ADD_PRODUCT_COUNT,
      product
    })
  }

  subtractProductCount = (product = {}) => {
    this.props.dispatch({
      type: Constants.ORDERS_SUBTRACT_PRODUCT_COUNT,
      product
    })
  }
  
  _renderProductItem = (product = {}) => (
    <ProductItem
      key={ product.id }
      product={ product }
      addProductToOrder={ this.addProductToOrder }
    />
  )

  _renderOrderItem = ({count, product} = {}) => (
    <tr key={ product.id }>
      <td>{ product.name }</td>
      <td>{ product.price }</td>
      <td>{ count }</td>
      <td>{ count * product.price }</td>
      <td>
        <button
          onClick={ () => { this.addProductToOrder(product) }}
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={ () => { this.subtractProductCount(product) }}
        >-</button>
      </td>
    </tr>
  ) 

  _renderOrdersList = () => (
    <table className="orders-list">
      <tbody>
        {
          Object.keys(this.props.orders).map(productId =>
            this._renderOrderItem(this.props.orders[productId])
          )
        }
        <tr className="total-count">
          <td>Total</td>
          <td>
            { this.totalCount }
          </td>
        </tr>
      </tbody>
    </table> 
  )

  render() {
    return (
      <div className="App">
        <ProductList
          products={ this.props.products }
          renderProductItem={ this._renderProductItem }
        />
        { this._renderOrdersList() }
      </div>
    );
  }
}


export const ProductItem = ({
  product = {},
  addProductToOrder
}) => (
  <tr>
    <td>{ product.name }</td>
    <td>{ product.price }</td>
    <td>
      <button 
        onClick={ () => { addProductToOrder(product) }}
      >
        Add
      </button>
    </td>
  </tr>
)

export const ProductList = ({
  products = [],
  renderProductItem
} = {}) => (
  <table className="products-list">
    <tbody>
      {
        products.map(product => renderProductItem(product))
      }
    </tbody>
  </table>
)

