import request from 'superagent'

export function fetchSeries() {
  return request.get('api/v1/series').then((res) => {
    //console.log('GET request from client-side', res)
    return res.body
  })
}

export function postNewSeries(newSeries) {
  return request
    .post('/api/v1/series')
    .send(newSeries)
    .then((res) => res.body)
}

export function deleteSeries(id) {
  return request
  .delete(`/api/v1/series/${id}`)
  .then(() => id)
}