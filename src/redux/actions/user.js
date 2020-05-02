import {requestAPI} from '../../api'
import {ERROR, LOADING, REQUEST_METHOD, REQUEST_SUCCESS, LOG_OUT} from '../constants'

function failureRequest(errorMessage) {
  return {
    type: ERROR,
    payload: errorMessage
  }
}

function successRequest(data) {
  return {
    type: REQUEST_SUCCESS,
    payload: data
  }
}

function loadingRequest() {
  return {
    type: LOADING
  }
}

function registerUserAction(formValues) {
  return async dispatch => {
    try {
      const response = await requestAPI('users', REQUEST_METHOD['POST'], formValues)
      return dispatch(successRequest(response.data))
    } catch (err) {
      const errorMessage = err.response.data.message
      return dispatch(failureRequest(errorMessage))
    }
  }
}

function loginUserAction(formValues) {
  return async dispatch => {
    try {
      const response = await requestAPI('login', REQUEST_METHOD['POST'], formValues)
      localStorage.setItem('token', response.data.token)
      return dispatch(successRequest(response.data))
    } catch (err) {
      const errorMessage = err.response.data.message
      return dispatch(failureRequest(errorMessage))
    }
  }
}

function getUserProfile() {
  return async dispatch => {
    try {
      dispatch(loadingRequest())
      const response = await requestAPI('profile', REQUEST_METHOD['GET'])
      return dispatch(successRequest(response.data))
    } catch (err) {
      const errorMessage = err.response.data.message
      return dispatch(failureRequest(errorMessage))
    }
  }
}

function logOutUser() {
  localStorage.clear()
  return {
    type: LOG_OUT
  }
}

export {registerUserAction, loginUserAction, getUserProfile, logOutUser}
