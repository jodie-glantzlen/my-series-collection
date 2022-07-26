import { fetchSeries, postNewSeries, deleteSeries, patchSeries } from '../apis/seriesApi'

export const RECEIVE_SERIES = 'RECEIVE_SERIES'
export const SEND_SERIES = 'SEND_SERIES'
export const DEL_SERIES = 'DEL_SERIES'
export const MODIFY_SERIES = 'MODIFY_SERIES'
// to make sure they match

// ACTIONS

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

export function delSeries(seriesId) {
  return {
    type: DEL_SERIES,
    payload: seriesId
  }
}

export function modifySeries(series) {
  return {
    type: MODIFY_SERIES,
    payload: series
  }
}

// THUNKS

export function getSeries() {
  return (dispatch) => {
    fetchSeries() // from api
    .then((seriesArr) => {
      dispatch(receiveSeries(seriesArr))
    })
    .catch(err => console.log(err.message))
  }
}

export function addSeries(newSeries) {
  return (dispatch) => {
    postNewSeries(newSeries) //from api
    .then((res) => {
      dispatch(sendSeries(res))
    })
    .catch(err => console.log(err.message))
  }
}

export function removeSeries(seriesId) {
  return (dispatch) => {
    deleteSeries(seriesId) // from api
    .then(() => {
      dispatch(delSeries(seriesId))
    })
    .catch(err => console.log(err.message))
  }
}

export function editSeries(selectedSeriesId, changes) {
  return (dispatch) => {
    patchSeries(selectedSeriesId, changes)
    .then((updatedSeries) => {
      dispatch(modifySeries(updatedSeries))
    })
    .catch(err => console.log(err.message))
  }
}
