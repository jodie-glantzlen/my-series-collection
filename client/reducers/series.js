import { RECEIVE_SERIES, SEND_SERIES, DEL_SERIES, MODIFY_SERIES } from '../actions/seriesActions'

const seriesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SERIES:
      return payload
    case SEND_SERIES:
      return [... state, payload]
    case DEL_SERIES:
      return state.filter((item) => item.id !== payload)
    case MODIFY_SERIES:
      return state.map((item) => {
        if (item.id === payload.selectedSeriesId) {
          item.title = payload.changes.title,
          item.author = payload.changes.author
        }
        return item
      })
    default:
      return state
  }
}

export default seriesReducer
