import React from 'react'

import JokesList from '../JokesList'

import { Header, Buttonz } from '../../components'

const AppContainer = () => {
  return (
    <div>
      <Header>
        <span>This is my Header!!!</span>
        <Buttonz>My button :D</Buttonz>
      </Header>
      <JokesList />
    </div>
  );
}
 
export default AppContainer;