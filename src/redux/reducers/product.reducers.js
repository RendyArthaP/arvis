import {
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_ERROR,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_ERROR
} from '../actions/product.actions.js';

const initialState = {
  allProduct: [],
  productByID: {},
  isLoading: false
}

const handleProducts = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        allProduct: action.result,
        isLoading: false
      }
    case GET_ALL_PRODUCT_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        productByID: action.result,
        isLoading: false
      }
    case GET_PRODUCT_BY_ID_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default: 
      return state
  }
}

export default handleProducts;