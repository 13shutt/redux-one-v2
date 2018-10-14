import React from 'react';

const GitUser = (props) => {

  const call = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    props.actions.userName(e.target.value)
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