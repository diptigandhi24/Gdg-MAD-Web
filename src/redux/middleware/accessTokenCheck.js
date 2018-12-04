// import { push } from 'connected-react-router'

export default store => next => action => {
  // const { payload } = action
  // console.log(payload)
  next(action)
}
