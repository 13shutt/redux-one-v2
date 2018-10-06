import React from 'react';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import { initStyles } from './styles'
import configureStore from './configureStore'

import AppContainer from './containers/AppContainer'

const history = createBrowserHistory()
const store = configureStore(history)

initStyles()

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
