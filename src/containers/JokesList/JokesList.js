import React from 'react'

import { Buttonz, BodyList, StyledUl, StyledOl, Delete } from '../../components'

const JokesList = (props) => {
  return (    
    <div>
      <BodyList>
          <h4>Get some Chuck Norris jokes from API</h4>
          <br /> 
          <Buttonz onClick={props.actions.fetchJoke} type="submit">Get Joke! :D</Buttonz>
          {<StyledUl>
            {props.jokes.items.map(
              (item, index) => 
                <StyledOl key={index}>
                  {item.value.joke} 
                  <Delete onClick={() => props.actions.deleteJoke(index)}>X</Delete>
                </StyledOl>
            )}
          </StyledUl>}
      </BodyList>
    </div>
  );
}
 
export default JokesList