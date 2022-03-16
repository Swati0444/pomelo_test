import { requestNewsData, successNewsData, failureNewsData } from './news'
import axios from 'axios'

export const fetchListDetails = (searchKey) => (dispatch) => {
  console.log('searchKey', searchKey)
  dispatch(requestNewsData())
  let endPoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=kElLQtkGloYP50ybJpZVhDWI70TPaqau'
  if(searchKey!=='' && typeof searchKey !== 'undefined'){
    endPoint = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchKey}&api-key=kElLQtkGloYP50ybJpZVhDWI70TPaqau`
  }
  return axios.get(endPoint)
    .then((response) => {
        console.log('response', response)
      dispatch(successNewsData(response.data))
    })
    .catch((error) => {
      dispatch(failureNewsData(error))
    })
}

