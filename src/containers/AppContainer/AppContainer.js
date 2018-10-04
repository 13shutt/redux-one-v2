import React from 'react'

import JokesList from '../JokesList'

import { Header } from '../../components'

const AppContainer = () => {
  return (
    <div>
      <Header>
        <span>This is my Header!!!</span>
      </Header>
      <JokesList />
    </div>
  );
}
 
export default AppContainer;