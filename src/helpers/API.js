const baseUrl = 'http://localhost:3000/'
const pokemonUrl = baseUrl + 'pokemon'
const signInUrl = baseUrl + 'signin'
const validateUrl = baseUrl + 'validate'
const createUserUrl = baseUrl + 'create'
const myTeamsUrl = baseUrl + 'user-teams'
const makeTeamUrl = baseUrl + 'make-team'
const deleteTeamUrl = baseUrl + 'delete-team'
const updateTeamUrl = baseUrl + 'update-team'
const typesUrl = baseUrl + 'types/'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

  const deleteItem = (url, data) => 
    fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())

  const patch = (url, data) =>
    fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())

  const createUser = (username, password) => post(createUserUrl, { username, password })

  const signIn = (username, password) => post(signInUrl, { username, password })

  const validates = () => get(validateUrl)

  const getPokemon = () => get(pokemonUrl)

  const getTeams = () => get(myTeamsUrl)

  const makeTeam = (data) => post(makeTeamUrl, data)

  const deleteTeam = (data) => deleteItem(deleteTeamUrl, data)

  const updateTeamPokemon = (data) => patch(updateTeamUrl, data)

  const getTypeData = (type) => get(typesUrl + type)

  export default {
    signIn,
    validates,
    getPokemon,
    createUser,
    getTeams,
    makeTeam,
    deleteTeam,
    updateTeamPokemon,
    getTypeData
  }