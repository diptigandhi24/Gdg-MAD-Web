import { SET_PAYMENT_DETAILS, SET_PAYMENT_STATUS, SET_PAYMENT_REDIRECT_LINK } from '../../actions/paymentactions'

const ACTION_HANDLERS = {
  [SET_PAYMENT_STATUS]: (state, action) => ({
    ...state, isPaid: action.payload
  }),
  [SET_PAYMENT_DETAILS]: (state, action) => ({
    ...state, paymentDetails: action.payload
  }),
  [SET_PAYMENT_REDIRECT_LINK]: (state, action) => ({
    ...state, redirectLink: action.payload
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function paymentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
