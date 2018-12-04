import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import { makeRootReducer } from './reducers'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import accessTokenCheck from './middleware/accessTokenCheck.js'
import { loadState, saveState } from './middleware/localStorageLoad'

const history = createBrowserHistory()

const createStore = (initialState = {}) => {
  initialState = loadState()
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, accessTokenCheck, routerMiddleware(history)]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') { // enable dev tools for dev evt
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // const store = createReduxStore(
  //   connectRouter(history)(makeRootReducer()),
  //   initialState,
  //   composeEnhancers(
  //     applyMiddleware(...middleware),
  //     ...enhancers
  //   )
  // )


  const store = createReduxStore(
    makeRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    ...enhancers
    ),
  )

  store.subscribe(() => {
    saveState(store.getState())
  })

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = history.listen(updateLocation(store))

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const reducers = require('./reducers').default
  //     store.replaceReducer(reducers(store.asyncReducers))
  //   })
  // }

  return store
}

export default createStore
