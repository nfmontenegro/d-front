import {REQUEST_SUCCESS, NOT_PERSIST, ERROR, LOADING, LOG_OUT} from '../constants'

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: false,
  isAuthenticated: false
}

//refact some requests reducers
export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case ERROR:
      return {
        ...state,
        data: payload,
        error: true,
        loading: false,
        isAuthenticated: false
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: payload,
        error: false,
        loading: false,
        isAuthenticated: true
      }
    case LOG_OUT:
      return {
        data: null,
        loading: false,
        error: false,
        isAuthenticated: false
      }
    case NOT_PERSIST:
      return {
        data: null,
        error: false,
        loading: false,
        isAuthenticated: false
      }
    default:
      return state
  }
}
