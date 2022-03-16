import thunk from 'redux-thunk'
import mockAxios from 'axios'

import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions/list-details/news'
import * as types from '../../actions/list-details/types'

import {
  fetchListDetails
} from '../../actions/list-details/index'

jest.mock('axios')
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to as define in reducer', () => {
    const expectedActionRequest = {
      type: types.REQUEST_NEWS_DATA
    }
    const expectedActionSuccess = {
      type: types.SUCCESS_NEWS_DATA,
      details: {}
    }
    const expectedActionGetError = {
      type: types.FAILURE_NEWS_DATA,
      error: {}
    }

    expect(actions.requestNewsData({})).toEqual(expectedActionRequest)
    expect(actions.successNewsData({})).toEqual(expectedActionSuccess)
    expect(actions.failureNewsData({})).toEqual(expectedActionGetError)
  })
  it('should create an action to as define in reducer', () => {
    const expectedActionRequestData = {
      type: types.SAVE_NEWS_DATA,
      news: {}
    }
    const expectedActionRequestList = {
      type: types.SAVE_NEWS_LIST,
      newslist: {}
    }
    const expectedActionGetClear = {
      type: types.CLEAR_NEWS_LIST
    }
    const expectedActionIndex = {
        type: types.SAVE_NEWS_INDEX,
        newsIndex: {}
      }

    expect(actions.saveNews({})).toEqual(expectedActionRequestData)
    expect(actions.saveNewsList({})).toEqual(expectedActionRequestList)
    expect(actions.clearNewsList({})).toEqual(expectedActionGetClear)
    expect(actions.saveIndex({})).toEqual(expectedActionIndex)
  })
})

describe('Action Creator for Fetching News List', () => {
  it('should dispatch verify success action with news Fetched', () => {
    const payload = {
      response: {},
      isLoading: false,
      isError: false,
      error: ''
    }
    mockAxios.get.mockResolvedValueOnce({
      data: { value: 'test' }
    })
    const expectedAction = [{ type: types.SUCCESS_NEWS_DATA, payload }]
    const store = mockStore({})

    store.dispatch(fetchListDetails('')).then(() => {
      const actionList = store.getActions()
      expect(actionList).toEqual(expectedAction)
    })
  })

    it('should dispatch verify success action with search query', () => {
        const payload = {
          response: {},
          isLoading: false,
          isError: false,
          error: ''
        }
        mockAxios.get.mockResolvedValueOnce({
          data: { value: 'test' }
        })
        const expectedAction = [{ type: types.SUCCESS_NEWS_DATA, payload }]
        const store = mockStore({})
    
        store.dispatch(fetchListDetails('search')).then(() => {
          const actionList = store.getActions()
          expect(actionList).toEqual(expectedAction)
        })
    })
})