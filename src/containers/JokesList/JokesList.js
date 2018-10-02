import React from 'react'

import { connect } from 'react-redux'
import { fetchJokes } from './duck/actions'

import { Buttonz, BodyList } from '../../components'

const JokesList = (props) => {
  {props.fetchJokes()}
  return (    
    <div>
      <BodyList>
        <form>
          <h4>Get some Chuck Norris jokes</h4>
          <input type="text"/>
          <Buttonz type="submit">Get Jokes! :D</Buttonz>
        </form>
      </BodyList>
    </div>
  );
}
 
export default connect(null, { fetchJokes })(JokesList)