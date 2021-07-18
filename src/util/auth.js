import { useValorizaApi } from 'hook'
import { TOKEN_KEY } from '../constant'

async function authenticateUser({ email, password }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const useValoriza = useValorizaApi()

  const response = await useValoriza.authenticateUser({ email, password })
  localStorage.setItem(TOKEN_KEY, response.data.token)
}

export { authenticateUser }
