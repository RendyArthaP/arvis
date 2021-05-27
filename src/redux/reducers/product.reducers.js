import {
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_ERROR,
  GET_PRODUCT_BY_CATEGORY_REQUEST,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_ERROR
} from '../actions/product.actions.js';

const initialState = {
  allProduct: [],
  productByCategory: [],
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
    case GET_PRODUCT_BY_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        productByCategory: action.result,
        isLoading: false
      }
    case GET_PRODUCT_BY_CATEGORY_ERROR:
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