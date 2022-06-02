import { arminAxios } from '../ArminAxiosClient'

const resource = 'login'

const signIn = async (email, password) => {
  const response = await arminAxios.post(`${resource}`, {
    email,
    password
  })
  return response.data
}

export {
  signIn
}
