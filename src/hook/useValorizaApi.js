import axios from 'axios'

const VALORIZA_API_URL = 'http://localhost:8081'

function useValorizaApi() {
  function registerUser({ email, password }) {
    const body = { email, password }
    const response = axios
      .post(VALORIZA_API_URL + '/users', body)
      .then((response) => {
        return response
      })
      .catch((err) => {
        return err.response
      })

    return response
  }

  function authenticateUser({ email, password }) {
    const body = { email, password }
    const response = axios
      .post(VALORIZA_API_URL + '/login', body)
      .then((response) => {
        return response
      })
      .catch((err) => {
        return err.response
      })

    return response
  }

  return { registerUser, authenticateUser }
}

export { useValorizaApi }
