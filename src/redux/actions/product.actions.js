import axios from 'axios';

export const GET_ALL_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_ALL_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_ALL_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export const GET_PRODUCT_BY_CATEGORY_REQUEST = 'GET_PRODUCT_BY_CATEGORY_REQUEST';
export const GET_PRODUCT_BY_CATEGORY_SUCCESS = 'GET_PRODUCT_BY_CATEGORY_SUCCESS';
export const GET_PRODUCT_BY_CATEGORY_ERROR = 'GET_PRODUCT_BY_CATEGORY_ERROR';

export const getAllProductRequest = () => {
  return {
    type: GET_ALL_PRODUCT_REQUEST
  }
}

export const getAllProductSuccess = (result) => {
  return {
    type: GET_ALL_PRODUCT_SUCCESS,
    result
  }
}

export const getAllProductError = (error) => {
  return {
    type: GET_ALL_PRODUCT_ERROR,
    error
  }
}

export const getProductByCategoryRequest = () => {
  return {
    type: GET_PRODUCT_BY_CATEGORY_REQUEST
  }
}

export const getProductByCategorySuccess = (result) => {
  return {
    type: GET_PRODUCT_BY_CATEGORY_SUCCESS,
    result
  }
}

export const getProductByCategoryError = (error) => {
  return {
    type: GET_PRODUCT_BY_CATEGORY_ERROR,
    error
  }
}

export const getAllProduct = () => {
  return function(dispatch) {
    dispatch(getAllProductRequest())

    axios
      .get(process.env.REACT_APP_PRODUCT)
      .then((result) => dispatch(getAllProductSuccess(result.data)))
      .catch((error) => dispatch(getAllProductError(error)))
  }
}

export const getProductByCategory = (category) => {
  return function(dispatch) {
    dispatch(getProductByCategoryRequest())

    axios
      .get(`${process.env.REACT_APP_PRODUCT_BY_CATEGORY}/${category}`)
      .then((result) => dispatch(getProductByCategorySuccess(result.data)))
      .catch((error) => dispatch(getProductByCategoryError(error)))
  }
}
