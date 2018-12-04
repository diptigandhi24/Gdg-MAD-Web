import { combineReducers } from 'redux'
// import paymentReducer from './paymentReducer'
// import trackReducer from './trackReducer'
// import requestReducer from './requestReducer'
import { connectRouter } from 'connected-react-router'
import userReducer from './userReducer'
// import plansReducer from './plansReducer'
// import devicedetailReducer from './devicedetailReducer'
// import uploadReducer from './uploadReducer'

export const makeRootReducer = (history) => combineReducers({
    // payment: paymentReducer,
    // trackDetails: trackReducer,
    user: userReducer,
    router: connectRouter(history),
    // plansInfo: plansReducer,
    // deviceInfo: devicedetailReducer,
    // request: requestReducer,
    // uploadDoc: uploadReducer,
  })

// export const injectReducers = (store, { key, reducer }) => {
//   if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
//
//   store.asyncReducers[key] = reducer
//   store.replaceReducer(makeRootReducer(store.asyncReducers))
// }

export default {
  // injectReducers,
  makeRootReducer
}
