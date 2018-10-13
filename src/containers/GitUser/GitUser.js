import React from 'react';
import { apiUserRequest, apiReposRequest } from '../../utils/github-api'

const GitUser = () => {
  console.log(apiUserRequest('13shutt'))
  console.log(apiReposRequest('13shutt'))
  return (
    <div>
      git users
    </div>
  );
}
 
export default GitUser;