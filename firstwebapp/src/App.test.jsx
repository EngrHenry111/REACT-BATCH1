import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import App from './App'
import { Provider } from 'react-redux'
import store from './Store'

describe('App', () => {
  it('renders the App component', () => {
    render(
    <Provider store={store}>
      <App />
    </Provider>)
    screen.debug();
  })
})