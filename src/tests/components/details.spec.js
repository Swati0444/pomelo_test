import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as redux from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../reducers/index'
import Details from '../../components/details'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('Test case for checking search bar', () => {
    beforeEach(() => {
        const setState = jest.fn()
        const useStateSpy = jest.spyOn(React, 'useState')
        const store = configureMockStore([thunk])({
            news: {
              response: {
                code: '0000',
                message: 'success',
                service: 'customers-ex-service',
                description: 'success'
              }
            }
          })
          console.log('store127', store.getState())
        useStateSpy.mockImplementation((init) => [init, setState])
        jest
          .spyOn(redux, 'useSelector')
          .mockImplementation(() => store.getState().news.response)
          render(<Provider store={store}><Details/></Provider>)
      })

  it('should render input and button correctly', async () => {
    const store = createStore(reducer, {})
    render(<Provider store={store}><Details/></Provider>)
  })
})
