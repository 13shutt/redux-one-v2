import React from 'react';

const GitUser = (props) => {

  const call = (e) => {
    props.actions.fetchProfile(e.target.value)
    // console.log(props.github, 'yspex')
  }

  return (
    <div>
      <form>
        <input type="text" onInput={call}/>
        <div>{props.github.user.login}</div>
      </form>
    </div>
  );
}
 
export default GitUser;