import axios from "axios"
import {store} from "../redux/store"

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  responseType: "json"
})

API.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
    config.headers["Content-type"] = "application-json"
  }
  return config
})

API.interceptors.response.use(
  response => response,
  error => {
    localStorage.removeItem("token")
    const [response] = error.response.data.result
    //move to constants
    const statusCodes = [401, 403]
    if (statusCodes.includes(response.error.code)) {
      store.dispatch({type: "NOT_PERSIST"})
    }
    return Promise.reject(response.error)
  }
)

export default API
