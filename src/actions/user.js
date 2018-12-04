export const SET_PROFILE = 'SET_PROFILE'
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export const SET_GLOBAL_LOADER_STATUS = 'SET_GLOBAL_LOADER_STATUS'
export const CREATE_CONSUMER = 'CREATE_CONSUMER'
export const SET_APP_CONFIG = 'SET_APP_CONFIG'
export const SET_BROWSER_LOCATION = 'SET_BROWSER_LOCATION'
export const SET_USER_LOCATIONS = 'SET_USER_LOCATIONS'
export const UPDATE_USER_LOCATIONS = 'UPDATE_USER_LOCATIONS'
export const SET_CONTRACT_DETAILS = 'SET_CONTRACT_DETAILS'
export const SET_USER_ADDRESS = 'SET_USER_ADDRESS'

export const setUsersLocation = (payload) => {
  return {
    type: SET_USER_LOCATIONS,
    payload
  }
}
export const updateUsersLocationSuccess = (payload) => {
  return {
    type: UPDATE_USER_LOCATIONS,
    payload
  }
}

export const setUserAddress = (payload) => {
  return {
    type: SET_USER_ADDRESS,
    payload
  }
}

export const setBrowserLocation = (payload) => {
  return {
    type: SET_BROWSER_LOCATION,
    payload
  }
}

export const setProfileDetails = (payload) => {
  return {
    type: SET_PROFILE,
    payload
  }
}

export const setContractDetailsSuccess = (payload) => {
  return {
    type: SET_CONTRACT_DETAILS,
    payload
  }
}

export const setAccessToken = (payload) => {
  return {
    type: SET_AUTH_TOKEN,
    payload
  }
}

export const setGlobalLoaderStatus = (payload) => {
  return {
    type: SET_GLOBAL_LOADER_STATUS,
    payload
  }
}

export const createConsumerSuccess = (payload) => {
  return {
    type: CREATE_CONSUMER,
    payload
  }
}

export const getAppConfigSuccess = (payload) => {
  return {
    type: SET_APP_CONFIG,
    payload
  }
}
