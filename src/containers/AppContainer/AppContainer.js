import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import JokesList from '../JokesList'

import { Header, StyledNav, StyledLink } from '../../components'

const AppContainer = () => {
  return (
    <div>
      <Header>
        <span>This is my Header!!!</span>
      </Header>
      <StyledNav>
        <Link to="/"><StyledLink>Home</StyledLink></Link>
        <Link to="/joke"><StyledLink>Fetch one joke</StyledLink></Link>
      </StyledNav>
      <Switch>
        <Route exact path="/" render={() => <div>Simple homepage</div>} />
        <Route path="/joke" component={() => <JokesList />} />
      </Switch>
    </div>
  );
}
 
export default AppContainer;