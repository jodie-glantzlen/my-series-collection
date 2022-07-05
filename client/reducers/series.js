import { RECEIVE_SERIES, ADD_SERIES } from '../actions/seriesActions'

const seriesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SERIES:
      return payload
    case ADD_SERIES:
      return [... state, payload]
    default:
      return state
  }
}

export default seriesReducer