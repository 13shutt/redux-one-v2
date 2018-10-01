import React from 'react';
import { Provider } from 'react-redux'

import { initStyles } from './styles'
import configureStore from './configureStore'

import AppContainer from './containers/AppContainer'

const store = configureStore()

initStyles()

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
