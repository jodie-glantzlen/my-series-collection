import { RECEIVE_SERIES, SEND_SERIES, DEL_SERIES } from '../actions/seriesActions'

const seriesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SERIES:
      return payload
    case SEND_SERIES:
      return [... state, payload]
    case DEL_SERIES:
      return state.filter((item) => item.id !== payload)
    default:
      return state
  }
}

export default seriesReducer
