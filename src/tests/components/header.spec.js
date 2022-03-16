import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../reducers/index'
import Header from '../../components/header'

describe('Test case for checking search bar', () => {
  it('should render input and button correctly', async () => {
    const store = createStore(reducer, {})
    const {container} = render(<Provider store={store}><Header/></Provider>)
    fireEvent.click(container.querySelector('#button-addon2'))
    const inputElement = container.querySelector('#input_element')
    fireEvent.change(inputElement, {target: {value: 'searchText'}})
  })
})
