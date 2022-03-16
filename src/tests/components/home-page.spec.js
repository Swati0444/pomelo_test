import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import * as redux from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../reducers/index'
import HomePage from '../../components/home-page'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('Test case for checking search bar', () => {
    let useEffect;
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce((f) => f())
      }
    
      const store = configureMockStore([thunk])({
        account: {
          response: {
            status: {
              code: '0000',
              message: 'success',
              description: 'success'
            },
          }
        }
      })
    beforeEach(() => {
        const setState = jest.fn()
        const useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, setState])
    
        /* mocking useEffect */
        jest
          .spyOn(redux, 'useSelector')
          .mockImplementation(() => store.getState().account.response)
          render(<Provider store={store}><HomePage/></Provider>)
      })
  it('should render input and button correctly', async () => {
    const store = createStore(reducer, {})
    render(<Provider store={store}><HomePage/></Provider>)
  })
})
