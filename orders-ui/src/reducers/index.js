import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'

export const appReducer = combineReducers({
    products,
    orders
})
