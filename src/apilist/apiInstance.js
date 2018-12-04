import axios from 'axios'
import { api } from '../utils/apiConfig'

export const axiosInstance = axios.create({
  baseURL: api.baseURL + api.restApiRoot
})

axiosInstance.interceptors.request.use(function (config) {
  let headerConfig = JSON.parse(localStorage.getItem('headers'))
  let sdkAuth = headerConfig.sdkAuth
  let source = headerConfig.source

  const token = sdkAuth
  // let ofa = commonUtils.ofa({"tzU": commonUtils.currentTime(), "appC": "P3EQV0WBPH"})
  // config.headers.dr9se2q = ofa.finalEmail;
  // config.headers.co1cx2 = ofa.alternateEmail;
  // console.log('token', config)
  let data = !(config.data && config.data.removeCustomHeader)
  if (token != null && data) {
    // console.log('token', sdkAuth)
    config.headers.sdkauth = sdkAuth
    config.headers.source = source
    config.headers.app = 'WebSDK'
    config.headers['Content-Type'] = 'application/json'
  } else {
    config.data = undefined
  }
  //  else {
  //   window.location = '/login'
  // }
  return config
}, function (err) {
  return Promise.reject(err)
})
