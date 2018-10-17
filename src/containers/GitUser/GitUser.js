import React from 'react';

const GitUser = (props) => {

  const call = (e) => {
    console.log(e.target.value)
    props.actions.fetchProfile(e.target.value)
    console.log(props.github, 'yspex')
  }

  return (
    <div>
      <form>
        <input type="text" onInput={call}/>
      </form>
    </div>
  );
}
 
export default GitUser;