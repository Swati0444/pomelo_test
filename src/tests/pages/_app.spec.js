import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../reducers/index'
import Apps from '../../pages/_app'
import Details from '../../pages/details'

describe('Test case for checking search bar', () => {
  it('should render input and button correctly', async () => {
    const store = createStore(reducer, {})
    render(<Provider store={store}><Apps Component={Details}/></Provider>)
  })
})
