import React from 'react'

import { Buttonz, BodyList, StyledUl, StyledOl } from '../../components'

const JokesList = (props) => {
  return (    
    <div>
      <BodyList>
          <h4>Get some Chuck Norris jokes from API</h4>
          <br /> 
          <Buttonz onClick={props.actions.fetchJoke} type="submit">Get Joke! :D</Buttonz>
          {<StyledUl>
            {props.jokes.items.map((item, index) => <StyledOl key={index}>{item.value.joke}</StyledOl>)}
          </StyledUl>}
      </BodyList>
    </div>
  );
}
 
export default JokesList