import React, { Component } from 'react';
import connect from 'redux-connect-decorator'
import * as Constants from './constants'

@connect((state) => ({
  products: state.products.data,
  orders: state.orders,
  loading: state.products.loading,
  error: state.products.error
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
      const price = order.price * order.count
      totalCount += price      
    })

    return totalCount
  }

  componentDidMount() {
    this.props.dispatch(Constants.FETCH_PRODUCTS_ACTION())
    console.log(this.props)
  }

  componentDidUpdate() {
    console.log(this.props)
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

  _renderOrderItem = (product = {}) => (
    <tr key={ product.id }>
      <td>{ product.title }</td>
      <td>{ product.manufacturer }</td>
      <td>{ product.price }</td>
      <td>{ product.count }</td>
      <td>{ product.count * product.price }</td>
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

  makeOrder = () => {
    this.props.dispatch(Constants.FETCH_ORDERS_ACTION(this.props.orders))
  }

  _renderOrdersList = () => (
    <div>
      <table className="table borderless">
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
      <button onClick={ () => { this.makeOrder() }}>Make order</button>
    </div>
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
  <tr className='product'>
    <td>{ product.title }</td>
    <td>{ product.manufacturer }</td>
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
      <table className="table borderless">
        <tbody>
          {
            products.map(product => renderProductItem(product))
          }
        </tbody>
      </table>
    ) 
