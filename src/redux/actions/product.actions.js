import axios from 'axios';

export const GET_ALL_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_ALL_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_ALL_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export const GET_PRODUCT_BY_ID_REQUEST = 'GET_PRODUCT_BY_ID_REQUEST';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const GET_PRODUCT_BY_ID_ERROR = 'GET_PRODUCT_BY_ID_ERROR';

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

export const getProductByIDRequest = () => {
  return {
    type: GET_PRODUCT_BY_ID_REQUEST
  }
}

export const getProductByIDSuccess = (result) => {
  return {
    type: GET_PRODUCT_BY_ID_SUCCESS,
    result
  }
}

export const getProductByIDError = (error) => {
  return {
    type: GET_PRODUCT_BY_ID_ERROR,
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

export const getProductById = (id) => {
  return function(dispatch) {
    dispatch(getProductByIDRequest())
    axios
      .get(`${process.env.REACT_APP_PRODUCT}/${id}`)
      .then((result) => dispatch(getProductByIDSuccess(result.data)))
      .catch((error) => dispatch(getProductByIDError(error)))
  }
}