import { fetchSeries, postNewSeries } from '../apis/seriesApi'

export const RECEIVE_SERIES = 'RECEIVE_SERIES'
export const SEND_SERIES = 'SEND_SERIES'
// to make sure they match

export function receiveSeries(seriesArr) {
  return {
    type: RECEIVE_SERIES,
    payload: seriesArr,
  }
}

export function sendSeries(newSeries) {
  return {
    type: SEND_SERIES,
    payload: newSeries
  }
}

export function getSeries() {
  return (dispatch) => {
    fetchSeries()
    .then((seriesArr) => {
      dispatch(receiveSeries(seriesArr))
    })
    .catch(err => console.log(err.message))
  }
}

export function addSeries(newSeries) {
  return (dispatch) => {
    postNewSeries(newSeries)
    .then((res) => {
      dispatch(sendSeries(res))
    })
    .catch(err => console.log(err.message))
  }
}