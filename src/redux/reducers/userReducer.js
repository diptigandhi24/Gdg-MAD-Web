import { SET_PROFILE, SET_AUTH_TOKEN, SET_GLOBAL_LOADER_STATUS,
  SET_APP_CONFIG, CREATE_CONSUMER, SET_BROWSER_LOCATION,
  SET_USER_LOCATIONS, SET_CONTRACT_DETAILS, SET_USER_ADDRESS, UPDATE_USER_LOCATIONS } from '../../actions/user'

const ACTION_HANDLERS = {
  [SET_PROFILE]: (state, action) => ({
    ...state, consumerProfileDetail: action.payload
  }),
  [SET_AUTH_TOKEN]: (state, action) => ({
    ...state, authToken: action.payload
  }),
  [SET_GLOBAL_LOADER_STATUS]: (state, action) => ({
    ...state, globalLoaderStatus: action.payload
  }),
  [SET_APP_CONFIG]: (state, action) => ({
    ...state, authDetails: action.payload
  }),
  [CREATE_CONSUMER]: (state, action) => ({
    ...state, consumerDetails: action.payload
  }),
  [SET_BROWSER_LOCATION]: (state, action) => ({
    ...state, currentLocation: action.payload
  }),
  [SET_USER_LOCATIONS]: (state, action) => ({
    ...state, usersLocation: action.payload
  }),
  [SET_CONTRACT_DETAILS]: (state, action) => ({
    ...state, contractDetails: action.payload
  }),
  [SET_USER_ADDRESS]: (state, action) => ({
    ...state, userAddress: action.payload
  }),
  [UPDATE_USER_LOCATIONS]: (state, action) => ({
    ...state, updatedUserAddress: action.payload
  })

}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
