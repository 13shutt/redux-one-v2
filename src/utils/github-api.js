const apiSettings = {
  client_id: 'fa5f25b95c66f47b259d',
  client_secret: 'ffecb95109be87f42ecbb4cce1575bd471b4f585',
  repos_count: 5,
  repos_sort: 'created: asc'
}

// https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`

// https://api.github.com/users/13shutt?client_id=fa5f25b95c66f47b259d&client_secret=ffecb95109be87f42ecbb4cce1575bd471b4f585

function fetchUserData(user) {
  return `https://api.github.com/users/${user}?client_id=${apiSettings.client_id}&client_secret=${apiSettings.client_secret}`
}

function fetchReposData(user) {
  return `https://api.github.com/users/${user}/repos?per_page=${apiSettings.repos_count}&sort=${apiSettings.repos_sort}&client_id=${apiSettings.client_id}&client_secret=${apiSettings.client_secret}`
}

// function checkStatus(response) {
//   return response
// }

// function parseJSON(response) {
//   return response.json()
// }

export async function apiRequest(name) {
  const userResponse = await fetch(fetchUserData(name))
  const reposResponse = await fetch(fetchReposData(name))

  const user = await userResponse.json()
  const repos = await reposResponse.json() 

  return {
    user,
    repos
  }
}
