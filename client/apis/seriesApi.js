import request from "superagent"

export function getSeries() {
  return request.get('api/v1/series').then((res) => {
    console.log('GET request from client-side', res)
    return res.body
  })
}