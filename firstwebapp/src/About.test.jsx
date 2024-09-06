import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Provider } from 'react-redux'
import store from './Store'
import About from './About'

describe('App', () => {
  it('renders the App component', () => {
    render(
    <Provider store={store}>
      <About />
    </Provider>)
    screen.debug();
  })
})