import React from 'react'

import { Buttonz, BodyList } from '../../components'

const JokesList = (props) => {
  {console.log(props.jokes)}
  return (    
    <div>
      <BodyList>
        <form>
          <h4>Get some Chuck Norris jokes</h4>
          <input type="text"/>
          <Buttonz onClick={props.actions.fetchJokes} type="submit">Get Jokes! :D</Buttonz>
        </form>
      </BodyList>
    </div>
  );
}
 
export default JokesList